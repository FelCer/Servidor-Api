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