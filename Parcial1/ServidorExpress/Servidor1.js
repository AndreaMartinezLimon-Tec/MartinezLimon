const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({origin: "http://localhost"}));

app.use(express.text())
app.use(express.json())

app.use('/', (req,res,next) => {
    console.log("Esta es una función Middleware")
    next() 
},(re,res,next)=>{
    console.log("Segundo middleware")
    next()
});

app.get('/', (req,res) => {
    //res.send('Servidor express');
    res.sendFile('./Static/Index.html',{root:__dirname},(err)=>(console.log('Archivo encontrado')))
});

app.post('/', (req,res) => {
    //res.send('Servidor express recibiendo post');
    res.json({usuario: 'Andrea'})
});

app.post('/texto', (req,res) => {
    console.log(req.body)
    let may = req.body.toUpperCase()
    let sinesp = req.body.trim()
    let longi = req.body.length
    res.json(
        {mayusculas: may,
            sinespacios: sinesp,
            longitud: longi}
    )
});
app.post('/json', (req,res) => {
    console.log(req.body)
    let cadena = "Hola " +req.body.nombre+ " "+req.body.apellido+ " ¿como estas?"
    res.json({saludo:cadena})
});
app.get('/mayusculas/:cadena', (req,res) => {
    console.log(req.params)
    res.send(req.params)
});
app.get('/suma', (req,res) => {
    console.log(req.query)
    let suma = parseInt(req.query.x)+parseInt(req.query.y)
    res.send(`La suma es ${suma}`)
});

app.use('/', (req,res) => {
    res.status(404).sendFile('./Static/404.html',{root:__dirname})
});

app.listen(8082, () => {
    console.log("Express escuchando en 8082");
});
//top 10 loggeadores de express oh yeah

