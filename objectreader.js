const fs = require("node:fs");
const read = () => {
  fs.readFile("/Users/ace/desktop/node/input.json", "utf8", (err, json) => {
    if (err) {
      return console.error(err);
    }
    const data = JSON.parse(json);
    // console.log(data);
  });
};
const create = (data) => {
  fs.readFile("/Users/ace/desktop/node/input.json", "utf8", (err, json) => {
    if (err) {
      return console.error(err);
    }
    const prevdata = JSON.parse(json);
    prevdata.push(data);
    // console.log(prevdata);
  });
};
create({
  id: 11,
  first_name: "ace",
  last_name: "Jimmes",
  email: "cjimmes0@disqus.com",
  gender: "Female",
  ip_address: "32.114.201.138",
});
const update = (id, data) => {
  fs.readFile("/Users/ace/desktop/node/input.json", "utf8", (err, json) => {
    if (err) {
      return console.error(err);
    }
    const prevdata = JSON.parse(json);
    const DataToUpdate = prevdata.filter((el) => el.id === id);
    const newArr = prevdata.filter((el) => el.id !== id);
    newArr.push({ ...DataToUpdate, ...data });
    console.log(newArr);
    fs.writeFile(
      "/Users/ace/desktop/node/input.json",
      "utf8",
      JSON.stringify(newArr),
      (err) => {
        if (err) return console.error(err);
      }
    );
  });
};
update(1, { last_name: "Orgilsaikhan" });
const dlt = (id) => {
  fs.readFile("/Users/ace/desktop/node/input.json", "utf8", (err, json) => {
    if (err) {
      return console.error(err);
    }
    const prevdata = JSON.parse(json);
    const dltId = prevdata[id - 1];
    const newArr = prevdata.filter((data) => data.id !== dltId.id);
    // console.log(newArr);
  });
};
dlt(1);
