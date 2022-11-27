const mysql2 = require('mysql2/promise');
const express = require('express');
var router = express.Router();

const pool = mysql2.createPool({
    host:'localhost',
    port: '3307',
    user:'root',
    password:'',
    database:'herbolaria'
  });

router.get('/', async (req,res) => {
    const ID = req.params.id_Ingrediente;
    const [responseBD] = await pool.execute(`SELECT * FROM hierbas`);
    res.json(responseBD);
});

router.get('/:ID', async (req,res) => {
    const ID = req.params.ID;
    const [responseBD] = await pool.execute(`SELECT * FROM hierbas WHERE ID=${ID}`);
    res.json(responseBD);
});
router.post('/hierba', async (req,res) => {
    const [responseBD] = await pool.execute(`INSERT INTO hierbas(Nombre_comun, Nombre_cientifico, Ubicación, Propagación, Mantenimiento, Plagas, Cosecha, Imagen) VALUES ('${req.body.Nombre_comun}','${req.body.Nombre_cientifico}','${req.body.Ubicacion}','${req.body.Propagacion}','${req.body.Mantenimiento}','${req.body.Plagas}','${req.body.Cosecha}','${req.body.Imagen}')`);
    res.send("Ingrediente agregado con exito");
});
router.put('/:ID', async (req,res) => {
    const ID = req.params.ID;
    const [responseBD] = await pool.execute(`UPDATE hierbas SET Nombre_comun='${req.body.Nombre_comun}',Nombre_cientifico='${req.body.Nombre_cientifico}',Ubicación='${req.body.Ubicacion}',Propagación='${req.body.Propagacion}',Mantenimiento='${req.body.Mantenimiento}',Plagas='${req.body.Plagas}',Cosecha='${req.body.Cosecha}',Imagen='${req.body.Imagen}' WHERE ID = ${ID}`);
    res.send(`Se ha modificado el ingrediente: ${ID}`);
});
router.delete('/:ID', async (req,res) => {
    const ID = req.params.ID;
    const [responseBD] = await pool.execute(`DELETE FROM ingrediente WHERE id_Ingrediente=${ID}`);
    res.send(`Se ha eliminado el ingrediente: ${ID} `);
});

module.exports.router=router;