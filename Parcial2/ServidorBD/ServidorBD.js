let json2xls = require('json2xls')
let mysql = require('mysql')
let fs=require('fs')
const express = require('express');
const {dirname} = require('path');

const app = express();

app.use(express.text())
app.use(express.json())

app.get('/ingrediente/:id_Ingrediente', (req,res) => {
    const ID = req.params.id_Ingrediente;
    let con = mysql.createConnection({
        host:'localhost',
        port: '3307',
        user:'root',
        password:'',
        database:'pasteleria'
    });
    
    con.connect();
    con.query(`SELECT * FROM ingrediente WHERE id_Ingrediente=${ID}`, function(error,results, fields){
        if(error) throw error;
        res.json(results);
    });
    con.end();
});

app.listen(8082, () => {
    console.log("Express escuchando en 8082");
});
