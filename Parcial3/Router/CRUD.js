const express = require('express');
const cors = require('cors');
const ruta = require('./RutaIngrediente');

const app = express();

app.use(cors({origin: "http://localhost"}));
app.use(express.text())
app.use(express.json())

app.use("/ingrediente",ruta.router);


app.listen(8082, () => {
    console.log("Express escuchando en 8082");
});
