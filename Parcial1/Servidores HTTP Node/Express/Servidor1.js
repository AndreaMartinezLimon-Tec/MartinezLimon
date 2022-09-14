const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('Servidor express');
});

app.post('/', (req,res) => {
    res.send('Servidor express recibiendo post');
});

app.listen(8082, () => {
    console.log("Express escuchando en 8082");
});