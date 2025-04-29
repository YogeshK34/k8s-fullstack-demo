const express = require("express");
const app = express();
const port = 3001;

app.get("/message", (req, res) => {
    res.json({
        message: "Hello from Backend API! 🚀"
    });
});

app.get("/health", (req, res) => {
    res.status(200).send("Backend is healthy!");
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Backend server listening at http://0.0.0.0:${port}`);
});
