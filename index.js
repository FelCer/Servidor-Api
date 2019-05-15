const http = require('http')
require('./routes/api')(app)
require('./routes/views')(app)
var express = require('express')
var app = express()
const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.end("]Go...");
  // init();
})

const port = process.env.PORT || 1337
server.listen(port)

// console.log("Server running at http://localhost:%d", port);

// const {PORT}=require("../");
// const PORT = process.env.PORT ||  3000;

// function init (){
//   console.log ("inicializando ..");
//   response.end("Arrancando");
//   app.listen(PORT, () =>{
//     console.log ("esta activo ..");
//     response.end("]Go...");
//   });
// }
