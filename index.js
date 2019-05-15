 const http = require('http');

// const server = http.createServer((request, response) => {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.end("Hello World!");
// });

// const port = process.env.PORT || 1337;
// server.listen(port);

// console.log("Server running at http://localhost:%d", port);

var express = require('express');
var app = express();
//const {PORT}=require("../");
const PORT = process.env.PORT ||  3000;
require("./routes/api") (app);
require("./routes/views")(app);


function init (){
  console.log ("inicializando ..");
  response.end("Arrancando");
  app.listen(PORT, () =>{
    console.log ("esta activo ..");
    response.end("]Go...");
  });
}

init();