const http = require('http');

const servidor=http.createServer((req,res)=>(
res.end("El servidor ha respondido correctamente")
));

servidor.listen(8080,()=>(console.log("Servidor en funcionamiento")));