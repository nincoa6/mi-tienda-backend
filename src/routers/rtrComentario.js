const express = require("express");
const router = express.Router();
const ctrComentario = require("../controllers/ctrComentario");

router.post("/comentario",ctrComentario.guardar); //Create 
router.get("/comentario",ctrComentario.listar); //Read
router.get("/comentario/id/:id",ctrComentario.buscarId); //Read
router.get("/comentario/num/:num",ctrComentario.buscarNum); //Read
router.get("/comentario/com/:com",ctrComentario.buscarCom); //Read
router.put("/comentario",ctrComentario.actualizar); //update
router.delete("/comentario/:id",ctrComentario.eliminar); //Delete

module.exports = router;
