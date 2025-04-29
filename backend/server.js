const express = require("express");
const app = express();
const port = 3001;

app.get("/api/message", (req, res) => {
    res.json({
        message: "Hello from Backend API! 🚀"
    });
});

app.get("/health", (req, res) => {
    res.status(200).send("Backend is healthy!");
});

app.listen(port, () => {
    console.log(`Backend server listening at http://localhost:${port}`);
  });