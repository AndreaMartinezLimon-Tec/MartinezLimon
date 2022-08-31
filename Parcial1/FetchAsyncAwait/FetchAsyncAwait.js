$(document).ready(function() {
    document.getElementById('boton').addEventListener('click',async function() {
        let dato = await hacerPeticion();
        let link = "https://cataas.com"
        document.getElementById('imagen').src= link + dato.url
     });

    async function hacerPeticion() {
        
        let respuesta =  await fetch("https://cataas.com/cat?json=true");
                let datojson = await respuesta.json();
                    return datojson
    }
});