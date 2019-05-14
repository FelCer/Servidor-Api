const  ambientes= require("../resources/ambientes");
const  escalas= require("../resources/escala");
const  parques= require("../resources/parque");
module.exports={
    getAmbientes:function(){
        console.log("solicitud de ambientes");
        return ambientes;
    },
    getEscalas:function(){
        console.log("solicitud de escalas");
        return escalas ;
    },
    getParques:function(){
        console.log("solicitud de escalas");
        return parques ;
    },
    getUserById:function(id){
        console.log("index js db solo user");
        return users.filter(user=>user._id===id);
    }
};