const express = require('express');
const app = express();
var port = process.env.PORT || 3000;
app.get('/',(req,res)=> res.send('lo logre!!!'));
app.listen(port,()=>console.log('corriendo'));

// const http = require('http');

// var express = require('express');
// var app = express();
// require("./routes/api") (app);
// require("./routes/views")(app);

// const server = http.createServer((request, response) => {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.end("];)!");
// });

// const port = process.env.PORT || 1337;
// server.listen(port);

// console.log("Server running at http://localhost:%d", port);


// // //const {PORT}=require("../");
// // const PORT = process.env.PORT ||  3000;



// // function init (){
// //   console.log ("inicializando ..");
// //   response.end("Arrancando");
// //   app.listen(PORT, () =>{
// //     console.log ("esta activo ..");
// //     response.end("]Go...");
// //   });
// // }

// // init();