const ctrComentario = {};
const comentario = require("../models/comentario");


//funcion para llevar documentos a la base de datos

ctrComentario.guardar = async(req, res) =>{
    await comentario
    .create(req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err))
}
// funcion CRUD
//Read
ctrComentario.listar = async(req, res) =>{
    await comentario
    .find()
    .then(data => res.json(data))
    .catch(err => res.json(err))

}
//read buscar por id

ctrComentario.buscarId = async(req, res) =>{
    await comentario
    .findById(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

//Bucar por numero
ctrComentario.buscarNum = async(req, res) =>{
    await comentario
    .find({numero : req.params.Num})
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

//buscar por caracter
ctrComentario.buscarCom = async(req, res) =>{
    await comentario
    .find({comentario : RegExp(req.params.com,"i")})
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

//Delete
ctrComentario.eliminar = async(req, res) =>{
await comentario
.deleteOne({_id:req.params.id})
.then(data => res.json(data))
.catch(err => res.json(err))
}

//update= actualizar datos
ctrComentario.actualizar= async(req, res) =>{
    const {_id,...body} = req.body
    await comentario
    .updateOne({_id:_id},{ $set : body})
    .then(data => res.json(data))
    .catch(err => res.json(err))
    }
module.exports = ctrComentario