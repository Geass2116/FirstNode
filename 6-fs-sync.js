const { resFileSync, writeFileSync, readFileSync } = require("fs");

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
const  third= readFileSync('./content/third.txt','utf8')

console.log(` ${first} ------------- ${second}`);

writeFileSync(
          './content/third.txt',
          `summation of first file and second file: ${first,console.log('asdfasdf')}-----${second}`,
    )

writeFileSync(
          './content/third.txt',
          'askdjfhaksjdfhlaksjdfhalskjdfhlkasjdf',
          {flag:'a'}//apend to file
    )
console.log(third);