const express = require('express');
const cors = require('cors');
const path = require('path');
const ruta = require('./routes/RutaIngrediente');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
    definition: {
    openapi: '3.0.0',
    info: {
    title: 'API Ingredientes',
    version: '1.0.0',
    },
    servers:[
    {url: "http://localhost:8082"}
    ],
    },
    apis: [`${path.join(__dirname,"./routes/RutaIngrediente.js")}`],
    };

const app = express();

app.use(cors({origin: "http://localhost"}));
app.use(express.text())
app.use(express.json())

app.use("/ingrediente",ruta.router);


app.listen(8082, () => {
    console.log("Express escuchando en 8082");
});

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerDocs));