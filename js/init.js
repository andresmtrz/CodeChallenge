const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const fecha = document.getElementById('fechaNacimiento');
const boton = document.getElementById('envio');
//declaracion de constantes que hacen referencia a los nodos del DOM a utilizar.

boton.addEventListener('click',()=>{
    fetch('https://jsonplaceholder.typicode.com/users',{
        method: "POST",
        body: JSON.stringify({
            nombre: nombre.value,
            apellido: apellido.value,
            fechaDeNacimiento: fecha.value
        }),
        headers: {
            "Content-type": "Application/json; charset=UTF-8"
        }
    }).then(response => response.json()).then(json => console.log(json))
})
