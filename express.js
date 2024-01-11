const express = require("express");
const { read } = require("./objectreader");

const port = 8080;
const app = express();

app.get("/", (req, res) => {
  res.send("heello its ace");
});
// app.get("/users", (req, res) => {
//   res.send([{}]);
// });
app.post("/users", (req, res) => {
  res.send("its me");
});
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
