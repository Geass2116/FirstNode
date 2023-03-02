const { readFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, data) => {
      if (err) {
        console.log("Error aayi");
        console.log(err);
        reject(err);
      }
      resolve(data);
    });
  });
};

getText("./content/second.txt")
  .then((result) => console.log(result)) //resolve
  .catch((err) => console.log("Error aagayi naa", err)); //reject

const start = async () => {
  try {
    const second = await getText("./content/second.txt");
    const first = await getText("./content/first.txt");
    console.log(first, "---", second);
  } catch (error) {
    console.log(error);
  }
};

getText("./content/first.txt")
  .then((result) => console.log(result)) //resolve
  .catch((err) => console.log(err)); //reject
start();
getText("./content/third.txt")
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
