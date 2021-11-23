const express = require("express");
const app = express();
const port = 3000;

const fs = require("fs");
const path = require("path");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/boardgames", (req, res) => {
  let rawdata = fs.readFileSync(path.resolve(__dirname, "boardgames.json"));
  let data = JSON.parse(rawdata);
  res.send(data);
});

app.get("/api/boardgame", (req, res) => {
  console.log(req.query.ID);
  res.send(req.query.ID);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
