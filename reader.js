const fs = require("fs");
fs.readFile(
  "/Users/ace/desktop/node/input.txt",
  "utf-8",
  function (err, data = 1) {
    if (err) {
      return console.error(err);
    }
    console.log(data);
    fs.writeFile(
      "/Users/ace/desktop/node/input.txt",
      String(Number(data) + 1),
      function (err) {
        if (err) {
          console.error(err);
        }
      }
    );
  }
);
