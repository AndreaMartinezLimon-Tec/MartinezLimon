let json2xls=require('json2xls')
let mysql = require('mysql')
let fs=require('fs')
const {dirname} = require('path')

let con = mysql.createConnection({
    host:'localhost',
    port: '3307',
    user:'root',
    password:'',
    database:'pasteleria'
});

con.connect();

con.query('SELECT * FROM ingrediente', function(error,results, fields){
    if(error) throw error;
    var xls=json2xls(results);
    fs.writeFileSync(`${__dirname}/excel/data.xlsx`,xls,'binary')
});
con.end();