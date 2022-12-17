require("./dataBase");
const express = require("express");

const app = express();
const PORT = 5000;
const cors = require("cors");




//configuracion para trabajar con peticiones HTTP post, get, delete, put

app.use(cors());
app.use(express.json())

//Rutas
app.use("/",require("./routers/rtrComentario"));

app.listen(PORT,(req, res)=>{
    console.log("servidor escuchando por el puerto :"+ PORT);
})
app.use("/:nom",(req, res) =>{

    res.send("respuesta al requerimiento de " + req.params.nom);

})
app.use("/:nom",(req, res) =>{

    res.send("respuesta al requerimiento de " + req.params.nom);

})

