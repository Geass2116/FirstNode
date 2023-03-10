const http = require("http");

// const server = http.createServer((req, res) => {

//     console.log("request event");
//     res.end("hello world")

// })
// server.listen(5000,()=> {
    //     console.log("Server listening on port : 5000");
    // })
    
    const server = http.createServer();
    
    server.on('request',(req,res)=> {
        res.end("hello world")
        console.log("request event");
        
})
server.listen(5000)