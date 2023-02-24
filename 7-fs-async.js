const { readFile, writeFile } = require("fs");
console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("mid");
    const second = result;
    writeFile("./content/asynch.txt", "fucked up messed up", (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(result);
    });
  });
});
console.log("end");

// console.log(result);
