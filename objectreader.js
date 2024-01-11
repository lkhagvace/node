const fs = require("node:fs");
var http = require("http");
const { url } = require("node:inspector");
const server = http.createServer((req, response) => {
  console.log(req.method);
  const reqUrl = req.url;
  if (reqUrl == "/") {
    return (
      response.writeHead(200, { "Content-Type": "text/html" }),
      response.end(`<h1 style="">hi</h1>`)
    );
  }
  if (reqUrl == "/users") {
    return readUsers(response);
  }
  if (reqUrl == "/products") {
    return fs.readFile("product.json", "utf-8", (err, json) => {
      if (err) console.log("error:", err);
      const prodData = JSON.parse(json);
      response.writeHead(200, { "Content-type": "application/json" });
      response.end(JSON.stringify(prodData));
    });
  }
  if (reqUrl == "/cars") {
    return fs.readFile("car.json", "utf-8", (err, json) => {
      if (err) console.log("error", err);
      const carData = JSON.parse(json);
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify(carData));
    });
  } else {
    return (
      response.writeHead(404, { "Content-Type": "text/html" }),
      response.end("<h1>404 hahahahahahha</h1>")
    );
  }
});
const readUsers = (response) => {
  fs.readFile("/Users/ace/desktop/node/users.json", "utf8", (err, json) => {
    if (err) {
      return console.error("error:", err);
    }
    const data = JSON.parse(json);
    response.writeHead(200, { "Content-type": "application/json" });
    response.end(JSON.stringify(data));
  });
};
// const create = (data) => {
//   fs.readFile("/Users/ace/desktop/node/input.json", "utf8", (err, json) => {
//     if (err) {
//       return console.error(err);
//     }
//     const prevdata = JSON.parse(json);
//     prevdata.push(data);
//   });
// };
// create({
//   id: 11,
//   first_name: "ace",
//   last_name: "Jimmes",
//   email: "cjimmes0@disqus.com",
//   gender: "Female",
//   ip_address: "32.114.201.138",
// });
// const update = (id, data) => {
//   fs.readFile("/Users/ace/desktop/node/input.json", "utf8", (err, json) => {
//     if (err) {
//       return console.error(err);
//     }
//     const prevdata = JSON.parse(json);
//     const DataToUpdate = prevdata.filter((el) => el.id === id);
//     const newArr = prevdata.filter((el) => el.id !== id);
//     newArr.push({ ...{ DataToUpdate }, ...data });
//     console.log(newArr);
//     fs.writeFile(
//       "/Users/ace/desktop/node/input.json",
//       "utf8",
//       JSON.stringify(newArr),
//       (err) => {
//         if (err) return console.error(err);
//       }
//     );
//   });
// };
// update(1, { last_name: "Orgilsaikhan" });
// const dlt = (id) => {
//   fs.readFile("/Users/ace/desktop/node/input.json", "utf8", (err, json) => {
//     if (err) {
//       return console.error(err);
//     }
//     const prevdata = JSON.parse(json);
//     const dltId = prevdata[id - 1];
//     const newArr = prevdata.filter((data) => data.id !== dltId.id);
//   });
// };
// dlt();
const PORT = 8000;
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
