const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

// ✅ Correct default value for in-cluster DNS
const API_ENDPOINT = process.env.API_ENDPOINT || "http://backend-service:3001/api";

app.use(express.static("public"));

app.get("/config", async (req, res) => {
  try {
    const response = await axios.get(`${API_ENDPOINT}/message`);
    res.json({
      apiEndpoint: API_ENDPOINT,
      message: response.data.message,
    });
  } catch (error) {
    console.error("Failed to load API config:", error.message);
    res.status(500).json({ error: "Failed to load API config" });
  }
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Frontend server running at http://0.0.0.0:${port}`);
});
