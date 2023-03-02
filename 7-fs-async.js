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


// const http = require('http')

// const server = http.createServer((req,res) => {

//         if(req.url === '/')
//         {
//             for(let i = 0;i<1000;i++)
//             {
//                 for(let j = 0;j<1000;j++)
//                 {
//                     console.log(`${i} ${j}`);
//                 }
//             }
//             res.end("Home Page")
//         }
//         else if(req.url === '/about')
//         {
//             res.end('about page')
//         }
//         else 
//             res.end("Invalids")
// })

// server.listen(5000, () => {
//     console.log("SErver is Listening on Port 5000");
// })