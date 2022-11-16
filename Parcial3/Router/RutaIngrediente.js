const mysql2 = require('mysql2/promise');
const express = require('express');
var router = express.Router();

const pool = mysql2.createPool({
    host:'localhost',
    port: '3307',
    user:'root',
    password:'',
    database:'pasteleria'
  });

router.get('/', async (req,res) => {
    const ID = req.params.id_Ingrediente;
    const [responseBD] = await pool.execute(`SELECT * FROM ingrediente`);
    res.json(responseBD);
});

router.get('/:id_Ingrediente', async (req,res) => {
    const ID = req.params.id_Ingrediente;
    const [responseBD] = await pool.execute(`SELECT * FROM ingrediente WHERE id_Ingrediente=${ID}`);
    res.json(responseBD);
});
router.post('/ingrediente', async (req,res) => {
    const [responseBD] = await pool.execute(`INSERT INTO ingrediente(Nombre, Existencias, Existencias_Minimas) VALUES ('${req.body.Nombre}','${req.body.Existencias}','${req.body.Existencias_Minimas}')`);
    res.send("Ingrediente agregado con exito");
});
router.put('/:id_Ingrediente', async (req,res) => {
    const ID = req.params.id_Ingrediente;
    const [responseBD] = await pool.execute(`UPDATE ingrediente SET Nombre='${req.body.Nombre}',Existencias='${req.body.Existencias}',Existencias_Minimas='${req.body.Existencias_Minimas}' WHERE id_Ingrediente=${ID}`);
    res.send(`Se ha modificado el ingrediente: ${ID}`);
});
router.delete('/:id_Ingrediente', async (req,res) => {
    const ID = req.params.id_Ingrediente;
    const [responseBD] = await pool.execute(`DELETE FROM ingrediente WHERE id_Ingrediente=${ID}`);
    res.send(`Se ha eliminado el ingrediente: ${ID}`);
});

module.exports.router=router;