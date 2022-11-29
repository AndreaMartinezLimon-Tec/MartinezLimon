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
/**
 * @swagger
 * /:
 *   get:
 *     summary: Listar hierbas
 *     tags:
 *        - Hierbas
 *     description: Devuelve todas las hierbas
 *     responses:
 *       200:
 *         description: Retorna una lista de todas las hierbas en la base dedatos.
 *       500:
 *         description: Error del servidor
 */
router.get('/', async (req,res) => {
    try {
        const ID = req.params.id_Ingrediente;
        const [responseBD] = await pool.execute(`SELECT * FROM hierbas`);
        res.status(200).json(responseBD);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
/**
 * @swagger
 * /:ID:
 *   get:
 *     summary: Obtener información de una hierba
 *     tags:
 *        - Hierbas
 *     description: Obtener la informacion de un hierba especifica por medio de su ID
 *     responses:
 *       200:
 *         description: Retorna la informacion en formato JSON
 *       500:
 *         description: Error del servidor
 *   parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID de la hierba
 *        schema:
 *          type: int
 */
router.get('/:ID', async (req,res) => {
    try {
        const ID = req.params.ID;
        const [responseBD] = await pool.execute(`SELECT * FROM hierbas WHERE ID=${ID}`);
        res.status(200).json(responseBD);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
/**
 * @swagger
 * /hierba/:
 *   post:
 *     tags:
 *        - Hierbas
 *     description: Agregar una nueva hierba
 *     summary: Agregar una nueva hierba a la base de datos enviando los parametros por body
 *     responses:
 *       200:
 *         description: Mensaje confirmando que la hierba se agregó a la base de datos
 *       500:
 *         description: Error del servidor
 *     parameters:
 *        - name: Hierba
 *          in: body
 *          description: Campos de la tabla hierba
 *          required: true
 */
router.post('/hierba', async (req,res) => {
    try {
        const [responseBD] = await pool.execute(`INSERT INTO hierbas(Nombre_comun, Nombre_cientifico, Ubicación, Propagación, Mantenimiento, Plagas, Cosecha, Imagen) VALUES ('${req.body.Nombre_comun}','${req.body.Nombre_cientifico}','${req.body.Ubicacion}','${req.body.Propagacion}','${req.body.Mantenimiento}','${req.body.Plagas}','${req.body.Cosecha}','${req.body.Imagen}')`);
        res.send("Hierba añadida con exito");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
/**
 * @swagger
 * /ID:
 *   put:
 *     summary: Actualiza una hierba.
 *     tags:
 *        - Hierbas
 *     description: Actualiza la información de una hierba dado su ID
 *     responses:
 *       200:
 *         description: Devuelve un mensaje confirmando que se actualizó la información
 *       500:
 *         description: Error del servidor
 *     parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          description: ID de la hierba
 *          schema:
 *            type: string
 *        - name: Hierba
 *          in: body
 *          description: Información de la hierba por actualizar
 *          required: true
 */
router.put('/:ID', async (req,res) => {
    try {
        const ID = req.params.ID;
        const [responseBD] = await pool.execute(`UPDATE hierbas SET Nombre_comun='${req.body.Nombre_comun}',Nombre_cientifico='${req.body.Nombre_cientifico}',Ubicación='${req.body.Ubicacion}',Propagación='${req.body.Propagacion}',Mantenimiento='${req.body.Mantenimiento}',Plagas='${req.body.Plagas}',Cosecha='${req.body.Cosecha}',Imagen='${req.body.Imagen}' WHERE ID = ${ID}`);
        res.send(`Se ha modificado el ingrediente: ${ID}`);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.delete('/:ID', async (req,res) => {
    try {
        const ID = req.params.ID;
        const [responseBD] = await pool.execute(`DELETE FROM ingrediente WHERE id_Ingrediente=${ID}`);
        res.send(`Se ha eliminado el ingrediente: ${ID} `);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports.router=router;