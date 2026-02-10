const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend API Running 🚀");
});

app.get("/api/message", (req, res) => {
  res.json({
    message: "Hello from Backend 👋 DevSecOps Pipeline Working!",
  });
});

const PORT = 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
