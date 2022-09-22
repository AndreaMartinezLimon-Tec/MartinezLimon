const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({origin: "http://localhost"}));

app.get('/', (req,res) => {
    //res.send('Servidor express');
    res.sendFile('./Static/Index.html',{root:__dirname},(err)=>(console.log('Archivo encontrado')))
});

app.post('/', (req,res) => {
    //res.send('Servidor express recibiendo post');
    res.json({usuario: 'Andrea'})
});

app.use('/', (req,res) => {
    res.status(404).sendFile('./Static/404.html',{root:__dirname})
});

app.listen(8082, () => {
    console.log("Express escuchando en 8082");
});

