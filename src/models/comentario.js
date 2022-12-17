//Para encadenar con la base de datos
const mongoose = require("mongoose");

const comentarioSchema = new mongoose.Schema({
    idCliente : { type : mongoose.Types.ObjectId,ref :"cliente"},
    idProducto : { type: mongoose.Types.ObjectId, ref :"producto"},
    calificacion :{ type : Number, default : 5 },
    comentario :{type: String, required: true},
    fecha : {type: Date, required: true,default:Date.now()},
    numero : {type: Number, require:true},
},{
timestamps : true
})
module.exports = mongoose.model("comentario", comentarioSchema)
