
        const userInput = document.getElementById('user-input');
        const sendBtn = document.getElementById('send-btn');
        const landingView = document.getElementById('landing-view');
        const messagesList = document.getElementById('messages-list');
        const chatContainer = document.getElementById('chat-container');
        const newChatBtn = document.getElementById('new-chat-btn');
        const suggestionCards = document.querySelectorAll('.suggestion-card');

        let isFirstMessage = true;

        // Auto-resize textarea
        userInput.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
            
            if (this.value.trim().length > 0) {
                sendBtn.classList.add('active');
            } else {
                sendBtn.classList.remove('active');
            }
        });

        // Handle sending message
async function sendMessage() {

    const text = userInput.value.trim();

    if (!text) return;

    if (isFirstMessage) {
        landingView.classList.add("hidden");
        messagesList.classList.remove("hidden");
        isFirstMessage = false;
    }

    appendMessage("user", text);

    const aiMessage = appendMessage(
        "assistant",
        "Thinking..."
    );

    userInput.value = "";

    try {

        const response = await fetch("/chat", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                message: text
            })

        });

        const data = await response.json();

        aiMessage.querySelector(".msg-content").textContent =
            data.reply;

    } catch (error) {

        aiMessage.querySelector(".msg-content").textContent =
            "Unable to connect to Gemini.";

        console.error(error);

    }

}

function appendMessage(role, content, id = null) {

    const messageDiv = document.createElement("div");

    messageDiv.className =
        `message-row animate-fade-in ${
            role === "user" ? "user-row" : "ai-row"
        }`;

    if (id) messageDiv.id = id;

    const isUser = role === "user";

    messageDiv.innerHTML = `
        ${!isUser ? `
        <div class="msg-avatar">
            <span class="material-symbols-outlined"
                style="font-variation-settings:'FILL' 1;">
                token
            </span>
        </div>
        ` : ""}

        <div class="msg-bubble">
            <p class="msg-content">${content}</p>
        </div>

        ${isUser ? `
        <div class="msg-avatar">
            <img src="https://i.pravatar.cc/100?img=3" alt="User">
        </div>
        ` : ""}
    `;

    messagesList.appendChild(messageDiv);

    chatContainer.scrollTo({
        top: chatContainer.scrollHeight,
        behavior: "smooth"
    });

    return messageDiv;
}

        // New Chat logic
        newChatBtn.addEventListener('click', () => {
            messagesList.innerHTML = '';
            messagesList.classList.add('hidden');
            landingView.classList.remove('hidden');
            isFirstMessage = true;
            userInput.value = '';
            userInput.focus();
        });

        // Suggestion Cards trigger messages
        suggestionCards.forEach(card => {
            card.addEventListener('click', () => {
                const prompt = card.querySelector('p').innerText;
                userInput.value = prompt;
                userInput.dispatchEvent(new Event('input'));
                sendMessage();
            });
        });

        // Keyboard support
        userInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });

        sendBtn.addEventListener('click', sendMessage);

        // Mouse movement parallax for background
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            const blob1 = document.querySelector('.blob-1');
            const blob2 = document.querySelector('.blob-2');
            if (blob1 && blob2) {
                blob1.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
                blob2.style.transform = `translate(${-x * 45}px, ${-y * 45}px)`;
            }
        });