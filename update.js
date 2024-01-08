const fs = require("node:fs");
const content = "Some content!";
fs.writeFile("/Users/ace/desktop/node/input.txt", content, (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(content);
});
