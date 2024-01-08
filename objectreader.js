const fs = require("node:fs");
const count = 0;
fs.readFile("/Users/ace/desktop/node/input.json", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  } else {
    count++;
    console.log(count);
  }
});
