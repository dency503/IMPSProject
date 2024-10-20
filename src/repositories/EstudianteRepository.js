const pool = require('../config/databaseController');
module.exports={
    obtenerTodosLosEstudiantes: async()=>{
        try {
            const result = await pool.query('SELECT * FROM estudiantes');
            return result;
        } catch (error) {
            console.log('Ocurrio un problema al consultar la lista de estudiantes: ',error)
        }
    },
    eliminarEstudiante: async(idestudiante) => { 
        try{ 
          const result = await pool.query('DELETE FROM estudiantes WHERE idestudiante = ?', [idestudiante]); 
          return result.affectedRows > 0; 
        }catch(error){ 
          console.error('Erro al eliminar el registro', error); 
        } 
    } 
}