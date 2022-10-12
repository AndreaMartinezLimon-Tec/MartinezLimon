const pasarMayuscula = (cadena) =>{
    return cadena.toUpperCase();
}

const quitarEspacios = (cadena) =>{
    return cadena.replace(/ /g,"");
}

const obtenerLongitud = (cadena) =>{
    return cadena.length;
}

exports.pasarMayuscula=pasarMayuscula;
exports.quitarEspacios=quitarEspacios;
exports.obtenerLongitud=obtenerLongitud;