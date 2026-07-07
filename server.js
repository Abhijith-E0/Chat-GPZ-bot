const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const { GoogleGenAI } = require("@google/genai");

const app = express();
const PORT = process.env.PORT || 3000;

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.post("/chat", async (req, res) => {

    try {

        const { message } = req.body;

        if (!message) {
            return res.status(400).json({
                error: "Message is required."
            });
        }

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: message
        });

        res.json({
            reply: response.text
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            reply: "Something went wrong."
        });

    }

});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});