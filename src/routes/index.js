const express = require("express");
const router = express.Router();
const estudianteRepository = require('../repositories/EstudianteRepository');

router.get('/',async(request,response)=>{
    const lstEstudiante = await estudianteRepository.obtenerTodosLosEstudiantes();
    console.log("Listado: ",lstEstudiante);
    response.send("Bienvenido al laboratorio de IMPS");

})
module.exports = router;