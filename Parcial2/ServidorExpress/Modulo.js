function pasarMayuscula(cadena){
    return cadena.toUpperCase();
}

function quitarEspacios(cadena){
    return cadena.replace(/ /g,"");
}

function obtenerLongitud(cadena){
    return cadena.length;
}

exports.pasarMayuscula=pasarMayuscula;
exports.quitarEspacios=quitarEspacios;
exports.obtenerLongitud=obtenerLongitud;