const fs = require("node:fs");
fs.readFile("/Users/ace/desktop/node/input.txt", "utf8", (err, data = 1) => {
  if (err) {
    return console.error(err);
  }
  console.log(String(Number(data + 1)));
});
