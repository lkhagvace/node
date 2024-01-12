const fs = require("node:fs");
var http = require("http");
const { url } = require("node:inspector");
const { json } = require("express");
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
const readUsers1 = () => {
  const reading = fs.readFileSync("users.json", "utf-8");
  const read = JSON.parse(reading);
  return read;
};
const create = (data) => {
  const creation = fs.readFileSync("users.json", "utf-8");
  const datas = JSON.parse(creation);
  // const newArr = datas.concat(data);
  datas.push(data);
  fs.writeFile("users.json", JSON.stringify(datas), (err) => {
    if (err) {
      console.error(err);
    }
  });
  return datas;
};
// create({
//   id: 11,
//   first_name: "ace",
//   last_name: "Jimmes",
//   email: "cjimmes0@disqus.com",
//   gender: "Female",
//   ip_address: "32.114.201.138",
// });
const update = (id, data) => {
  const datas = fs.readFileSync("users.json", "utf-8");
  const prevData = JSON.parse(datas);
  const dataToUp = prevData.filter((info) => info.id === id);
  const newArr = prevData.filter((indexes) => indexes.id !== id);
  newArr.push({ ...dataToUp, ...data });

  fs.writeFile("users.json", JSON.stringify(newArr), (err) => {
    if (err) return console.error(err);
  });
  return newArr;
};

// update(1, { last_name: "Orgilsaikhan" });
const dlt = (id) => {
  const deleting = fs.readFileSync("users.json", "utf8");
  const prevdata = JSON.parse(deleting);
  const newArr = prevdata.filter((data) => data.id !== id);
  fs.writeFile("users.json", JSON.stringify(newArr), (err) => {
    if (err) console.error("error: ", err);
  });
  return newArr;
};
module.exports = { readUsers1, create, update, dlt };
// dlt();
const PORT = 8000;
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
