const mongoose =require("mongoose");

mongoose
.connect("mongodb+srv://aninco6:12345Isabella@cluster0.do9tzlx.mongodb.net/mitienda?retryWrites=true&w=majority") //conexion a la base de datos
.then(console.log("conecto con la base de datos")) //si la conexion fue satisfactoria
.catch(err => console.log("fallo la conexion base de datos"+ err)) // si la conexion no fue exitosa