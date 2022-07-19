let contactos = []

let formulario
let inputNombre
let inputApellido
let inputEmail
let inputTipo
let inputComentarios
let botonSubmit



class Contacto{
    constructor(nombre, apellido, email, tipo, comentarios)
    {
    this.nombre = nombre
    this.apellido = apellido
    this.email = email
    this.tipo = tipo
    this.comentarios = comentarios
    }
}

function inicializarElementos() {
    formulario = document.getElementById("formulario");
    botonSubmit = document.getElementById("botonSubmit")
    inputNombre = document.getElementById("inputNombre");
    inputApellido = document.getElementById("inputApellido");
    inputEmail = document.getElementById("inputEmail");
    inputTipo = document.getElementById("inputTipo");
    inputComentarios = document.getElementById("inputComentarios");
}


function inicializarEventos() {
    botonSubmit.onclick = (event) => validarFormulario(event)
}

function validarFormulario(event) {
    event.preventDefault();
    let nombre = inputNombre.value
    let apellido = inputApellido.value
    let email = inputEmail.value
    let tipo = inputTipo.value
    let comentarios = inputComentarios.value
    let contacto = new Contacto(nombre, apellido, email, tipo, comentarios);
    contactos.push(contacto);
    formulario.reset()
    botonSubmit.onclick = (event) => mostrarAlert(event)
    Swal.fire({
        icon: 'success',
        title: `Bienvenido: ${nombre}`,
        text: `En breve responderemo su ${tipo}`,
    })
    almacenarContactoLocalStorage();
}

function almacenarContactoLocalStorage() {
    localStorage.setItem("Contactos", JSON.stringify(contactos));
}

function obtenerContactoLocalStorage() {
    let contactosAlmacenados = localStorage.getItem("Contactos");
    if (contactosAlmacenados !== null) {
    contactos = JSON.parse(contactosAlmacenados);
    }
}

function main() {
    inicializarElementos();
    inicializarEventos();
    obtenerContactoLocalStorage();
}

main();