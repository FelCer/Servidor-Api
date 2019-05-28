const express = require('express');
const app = express();
require("./routes/api") (app);
require("./routes/views")(app);
var port = process.env.PORT || 3000;
app.get('/',(req,res)=> res.send('lo logre!!!'));

//variable de npm de mssql
var mssql=require('mssql');
//Variable de conexion
const config={
    user:'felipepocketpark24',
    password:'Bd2019*..',
    server:'felipe-bd-pocketpark.database.windows.net',
    database:'BaseDatos_pocketPark',
    options: {
        encrypt: true // Use this if you're on Windows Azure
    }
}
var connection=mssql.connect(config,function(err,res){
    if(err){
        throw err;
    }else{
        console.log('conectado ala base de datos exitosamente.');
        app.listen(port,()=>console.log('corriendo'));
    }
})

// module.export es de express es para que otros modulos lo puedan ver
module.exports=app;