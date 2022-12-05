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
 * /herbolaria/:
 *   get:
 *     summary: Listar las hierbas.
 *     tags:
 *        - Hierbas
 *     description: Devuelve todas las hierbas en las bases de datos.
 *     produces:
 *       - json
 *     responses:
 *       200:
 *         description: Retorna una lista de todas las hierbas en la base de datos en formato JSON.
 *         schema:
 *           type: array
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
 * /herbolaria/{ID}:
 *   get:
 *     summary: Obtener información de una hierba por ID.
 *     tags:
 *        - Hierbas
 *     description: Obtener la informacion de un hierba especifica por medio de su ID.
 *     produces:
 *       - json
 *     responses:
 *       200:
 *         description: Retorna la informacion en formato JSON.
 *       500:
 *         description: Error del servidor.
 *   parameters:
 *      - name: ID
 *        in: path
 *        required: true
 *        description: ID de la hierba.
 *        schema:
 *          type: integer
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
 * /herbolaria/hierba:
 *   post:
 *     tags:
 *        - Hierbas
 *     summary: Agregar una nueva hierba a la base de datos.
 *     produces:
 *       - text
 *     description: Agregar una nueva hierba a la base de datos enviando los parametros por body.
 *     responses:
 *       200:
 *         description: Mensaje confirmando que la hierba se agregó a la base de datos.
 *       500:
 *         description: Error del servidor
 *     parameters:
 *        - name: Hierba
 *          in: body
 *          description: Campos de la tabla hierba.
 *          required: true
 *          schema:
 *           type: object
 *           properties:
 *             Nombre_comun:
 *               type: string
 *               description: El nombre comùn de la planta.
 *             Nombre_cientifico:
 *               type: string
 *               description: El nombre cientifico de la hierba.
 *             Ubicación:
 *               type: string
 *               description: La mejor ubicación para plantar la hierba.
 *             Propagación:
 *               type: string
 *               description: El mètodo de prooagación de la hierba.
 *             Mantenimiento:
 *               type: string
 *               description: El mantenimiento requerido por la hierba.
 *             Plagas:
 *               type: string
 *               description: Las plagas potenciales que pueden afectar a la hierba.
 *             Cosecha:
 *               type: string
 *               description: El mètodo para cosechar la hierba.
 */
router.post('/hierba', async (req,res) => {
    try {
        const [responseBD] = await pool.execute(`INSERT INTO hierbas(Nombre_comun, Nombre_cientifico, Ubicación, Propagación, Mantenimiento, Plagas, Cosecha) VALUES ('${req.body.Nombre_comun}','${req.body.Nombre_cientifico}','${req.body.Ubicacion}','${req.body.Propagacion}','${req.body.Mantenimiento}','${req.body.Plagas}','${req.body.Cosecha}')`);
        res.send("Hierba añadida con exito");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
///**
// * @swagger
// * /herbolaria/actualizar/{ID}:
// *   put:
// *     summary: Actualiza una hierba.
// *     tags:
// *        - Hierbas
// *     description: Actualiza la información de una hierba dado su ID
// *     produces:
// *       - text
// *     responses:
// *       200:
// *         description: Devuelve un mensaje confirmando que se actualizó la información.
// *       500:
// *         description: Error del servidor.
// *     parameters:
// *        - name: ID
// *          in: path
// *          required: true
// *          description: ID de la hierba a actualizar.
// *          schema:
// *            type: integery
// *        - name: Hierba
// *          in: body
// *          description: Información de la hierba por actualizar.
// *          required: true
// *          schema:
// *           type: object
// *           properties:
// *             Nombre_comun:
// *               type: string
// *               description: El nombre comùn de la planta.
// *             Nombre_cientifico:
// *               type: string
// *               description: El nombre cientifico de la hierba.
// *             Ubicación:
// *               type: string
// *               description: La mejor ubicación para plantar la hierba.
// *             Propagación:
// *               type: string
// *               description: El mètodo de propagación de la hierba.
// *             Mantenimiento:
// *               type: string
// *               description: El mantenimiento requerido por la hierba.
// *             Plagas:
// *               type: string
// *               description: Las plagas potenciales que pueden afectar a la hierba.
// *             Cosecha:
// *               type: string
// *               description: El mètodo para cosechar la hierba.
// */
//router.put('/actualizar/:ID', async (req,res) => {
//    try {
//        const ID = req.params.ID;
//        const [responseBD] = await pool.execute(`UPDATE hierbas SET Nombre_comun='${req.body.Nombre_comun}',Nombre_cientifico='${req.body.Nombre_cientifico}',Ubicación='${req.body.Ubicación}',Propagación='${req.body.Propagación}',Mantenimiento='${req.body.Mantenimiento}',Plagas='${req.body.Plagas}',Cosecha='${req.body.Cosecha}' WHERE ID = ${ID}`);
//        res.send(`Se ha modificado la hierba: ${ID}`);
//    } catch (error) {
//        res.status(500).json({ error: error.message });
//    }
//});
//
///**
// * @swagger
// * /herbolaria/eliminar/{ID}:
// *   delete:
// *     summary: Eliminar una hierba por ID.
// *     tags:
// *        - Hierbas
// *     description: Obtener la informacion de un hierba especifica por medio de su ID.
// *     produces:
// *       - text
// *     responses:
// *       200:
// *         description: Retorna un mensaje confirmando la eliminación de la hierba.
// *       500:
// *         description: Error del servidor.
// *   parameters:
// *      - name: ID
// *        in: path
// *        required: true
// *        description: ID de la hierba a eliminar.
// *        schema:
// *          type: int
// */
// router.delete('/eliminar/:ID', async (req,res) => {
//    try {
//        const ID = req.params.ID;
//        const [responseBD] = await pool.execute(`DELETE FROM hierbas WHERE ID=${ID}`);
//        res.send(`Se ha eliminado la hierba: ${ID} `);
//    } catch (error) {
//        res.status(500).json({ error: error.message });
//    }
//});

module.exports.router=router;