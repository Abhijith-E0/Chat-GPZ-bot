# 🤖 Chat-GPZ Bot

A modern AI chatbot built with **Node.js**, **Express.js**, **HTML**, **CSS**, and **JavaScript**, powered by **Google Gemini AI**. The application features a sleek ChatGPT-inspired interface with real-time AI conversations.

---

## ✨ Features

- 🤖 Google Gemini AI Integration
- 💬 Real-time AI Chat
- ⚡ Streaming Response Support (Optional)
- 🎨 Modern ChatGPT-inspired UI
- 📱 Responsive Design
- 📂 Chat History Sidebar
- ➕ New Chat Functionality
- ⌨️ Enter to Send Message
- 📎 Attachment Button UI
- 🌙 Dark Theme
- ✨ Smooth Animations
- 🚀 Express.js Backend
- 🔒 Environment Variable Support
- 📜 Clean and Beginner-Friendly Code

---

## 📸 Screenshots

### Chat Interface

![Chat-gpz-bot](.images/Screenshot1.png)

### AI Response

![Chat](.images/Screenshot2.png)

---

## Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript (ES6)

### Backend

- Node.js
- Express.js

### AI

- Google Gemini API

### Packages

- express
- cors
- dotenv
- @google/genai

---

## Project Structure

```text
chat-gpt-clone/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── images/
│   ├── screenshots1.png
│   └── screenshots2.png
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
├── .env.example
└── README.md
```

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Abhijith-E0/Chat-GPZ-bot.git
```

---

### 2. Navigate to the Project

```bash
cd Chat-GPZ-bot
```

---

### 3. Install Dependencies

```bash
npm install
```

---

### 4. Create a `.env` File

Create a file named `.env` in the project root.

```env
GEMINI_API_KEY=YOUR_API_KEY_HERE
PORT=3000
```

> **Do not upload your `.env` file to GitHub.**

---

### 5. Start the Server

```bash
node server.js
```

or

```bash
npm start
```

---

### 6. Open the Application

```
http://localhost:3000
```

---

## Environment Variables

Create a `.env` file using the following template.

```env
GEMINI_API_KEY=YOUR_API_KEY_HERE
PORT=3000
```

---

## Dependencies

```json
{
  "express": "^5.x",
  "cors": "^2.x",
  "dotenv": "^17.x",
  "@google/genai": "^1.x"
}
```

Install them using

```bash
npm install
```

---

## Available Scripts

Start the application

```bash
node server.js
```

Development mode (if using nodemon)

```bash
nodemon server.js
```
---

## Learning Outcomes

This project helped me understand:

- Node.js Fundamentals
- Express.js Routing
- REST APIs
- Fetch API
- Asynchronous JavaScript
- Promises & Async/Await
- Environment Variables
- Gemini AI API Integration
- Frontend & Backend Communication
- JSON Data Handling
- Responsive UI Design

---

## Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push your branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## Author

**Abhijith E**

GitHub: https://github.com/Abhijith-E0

---

## License

This project is licensed under the MIT License.

Feel free to use, modify, and distribute it.
