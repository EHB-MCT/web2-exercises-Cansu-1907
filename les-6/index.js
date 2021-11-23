const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/randomtext", (req, res) => {
  res.send("Hello sir");
});

app.get("/getData", (req, res) => {
  let data = {
    name: "Cansu Bilal",
    age: 21,
  };
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
