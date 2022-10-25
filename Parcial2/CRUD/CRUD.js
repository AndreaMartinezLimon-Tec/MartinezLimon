const express = require('express');
const cors = require('cors');
const mysql2 = require('mysql2/promise');

const pool = mysql2.createPool({
    host:'localhost',
    port: '3307',
    user:'root',
    password:'',
    database:'pasteleria'
  });

const app = express();

app.use(cors({origin: "http://localhost"}));

app.use(express.text())
app.use(express.json())

app.get('/ingrediente', async (req,res) => {
    const ID = req.params.id_Ingrediente;
    const [responseBD] = await pool.execute(`SELECT * FROM ingrediente`);
    res.json(responseBD);
});

app.get('/ingrediente/:id_Ingrediente', async (req,res) => {
    const ID = req.params.id_Ingrediente;
    const [responseBD] = await pool.execute(`SELECT * FROM ingrediente WHERE id_Ingrediente=${ID}`);
    res.json(responseBD);
});
app.post('/ingrediente', async (req,res) => {
    const [responseBD] = await pool.execute(`INSERT INTO ingrediente(Nombre, Existencias, Existencias_Minimas) VALUES ('${req.body.Nombre}','${req.body.Existencias}','${req.body.Existencias_Minimas}')`);
    res.send("Ingrediente agregado con exito");
});
app.put('/ingrediente/:id_Ingrediente', async (req,res) => {
    const ID = req.params.id_Ingrediente;
    const [responseBD] = await pool.execute(`UPDATE ingrediente SET Nombre='${req.body.Nombre}',Existencias='${req.body.Existencias}',Existencias_Minimas='${req.body.Existencias_Minimas}' WHERE id_Ingrediente=${ID}`);
    res.send(`Se ha modificado el ingrediente: ${ID}`);
});
app.delete('/ingrediente/:id_Ingrediente', async (req,res) => {
    const ID = req.params.id_Ingrediente;
    const [responseBD] = await pool.execute(`DELETE FROM ingrediente WHERE id_Ingrediente=${ID}`);
    res.send(`Se ha eliminado el ingrediente: ${ID}`);
});

app.listen(8082, () => {
    console.log("Express escuchando en 8082");
});
