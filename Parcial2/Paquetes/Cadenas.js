const pasarMayuscula = (cadena) =>{
    return cadena.toUpperCase();
}

const quitarEspacios = (cadena) =>{
    return cadena.replace(/ /g,"");
}

const obtenerLongitud = (cadena) =>{
    return cadena.length;
}

console.log(module);
exports.pasarMayuscula=pasarMayuscula;
exports.quitarEspacios=quitarEspacios;
exports.obtenerLongitud=obtenerLongitud;
console.log(module);

//Pones npm login y luego npm publish