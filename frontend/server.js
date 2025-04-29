const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/config', (req, res) => {
  res.json({
    apiEndpoint: process.env.API_ENDPOINT || "http://localhost:3001"
  });
});

app.listen(port, () => {
  console.log(`Frontend server listening at http://localhost:${port}`);
});