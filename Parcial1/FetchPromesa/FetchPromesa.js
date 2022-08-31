$(document).ready(function() {
    document.getElementById('boton').addEventListener('click',function() {
        hacerPeticion();
         });

        function hacerPeticion() {
        let link = "https://cataas.com"
        fetch("https://cataas.com/cat?json=true")
        .then(respuesta => respuesta.json())
        .then(datos => document.getElementById('imagen').src= link + datos.url)
        }
});