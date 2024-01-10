const fs = require("fs");
const http = require("http");
const server = http.createServer((req, res) => {
  creater(res);
});
const creater = (res) => {
  fs.readFile("input.json", "utf-8", (err, json) => {
    if (err) console.log("error: ", err);
    const data = JSON.parse(json);
    data.push({
      namee: "Lkhagva",
    });

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  });
};
const PORT = 9000;
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
