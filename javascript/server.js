const express = require("express");
const app = express();
const PORT = 3000;

// Simple endpoint
app.get("/", (req, res) => {
  res.json({ message: `${process.env.message}` });
});

app.get("/greeting", (req, res) => {
  const name = req.query.name || "World";
  res.json({ message: `Hello, ${name}!` });
});

app.get("/group-1/tcc-10", (req, res) => {
  res.json({ message: `ping-TCC-231010` });
});

app.get("/group-1/tcc-02", (req, res) => {
  res.json({ message: `Beer-TCC-231002` });
});

app.get("/group-1/tcc-26", (req, res) => {
  res.json({ message: `Boo-TCC-231026` });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
