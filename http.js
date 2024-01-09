var http = require("http");
const db = require("");
http
  .createServer(function (req, res) {
    res.write("hello world lkhagva");
    res.end();
  })
  .listen(8080);
