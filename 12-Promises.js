const { readFile, writeFile } = require("fs").promises;

//          ----OR-----

// const {readFile,writeFile} = require('fs');
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const second = await readFile("./content/second.txt", "utf-8");
    const first = await readFile("./content/first.txt", "utf8");

    // -------OR------

    // const second = await readFilePromise("./content/second.txt","utf-8")
    // const first = await readFilePromise("./content/first.txt","utf8")

    writeFile(
      "./content/12-Promises.txt",
      `\nnewly created file Bro and merged from : ${first}--${second}`,
      {flag:'a'}
    );
    console.log(first, "---", second);
  } catch (error) {
    console.log(error);
  }
};

start();
