var http = require("http");
const server = http.createServer((req, response) => {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end("Hello Its Ace heeh");
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
