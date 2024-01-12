const express = require("express");
const { readUsers1, create, update, dlt } = require("./objectreader");
const cors = require("cors");

const PORT = 8080;
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/users", (req, res) => {
  console.log(req.method);
  const read = readUsers1();
  res.send(read);
});
// app.get("/users", (req, res) => {
//   res.send([{}]);
// });
// app.post("/users", (req, res) => {
//   res.send(readUsers(res));
// });
app.post("/product", (req, res) => {
  const post = create({
    id: 30,
    first_name: "lkhagva",
  });
  res.send(post);
});
app.put("/putting", (req, res) => {
  const put = update(3, { last_name: "Orgilsaikhan" });
  res.send(put);
});
app.delete("/deleting", (req, res) => {
  const deleting = dlt(4);
  res.send(deleting);
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
