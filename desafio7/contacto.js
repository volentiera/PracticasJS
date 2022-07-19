





// linea 54 uso or

// linea 95 uso and







let contactos = []

let formulario
let inputNombre
let inputApellido
let inputEmail
let inputTipo
let inputComentarios
let botonSubmit


class Contacto {
    constructor(nombre, apellido, email, tipo, comentarios) {
        this.nombre = nombre
        this.apellido = apellido
        this.email = email
        this.tipo = tipo
        this.comentarios = comentarios
    }
}

function inicializarElementos() {
    formulario = document.getElementById("formulario")
    botonSubmit = document.getElementById("botonSubmit")
    inputNombre = document.getElementById("inputNombre")
    inputApellido = document.getElementById("inputApellido")
    inputEmail = document.getElementById("inputEmail")
    inputTipo = document.getElementById("inputTipo")
    inputComentarios = document.getElementById("inputComentarios")
}


function inicializarEventos() {
    botonSubmit.onclick = (event) => validarFormulario(event)
}


//--------------------------------utilizo el or----------------------------


function validacionesInputsFormulario(contacto) {
    contacto.nombre || ingresoValorDefault(contacto)
    contacto.apellido || ingresoValorDefault(contacto)
    contacto.email || ingresoValorDefault(contacto)
    contacto.comentarios || ingresoValorDefault(contacto)
}

function ingresoValorDefault(contacto) {
    contacto.nombre = null
    contacto.apellido = null
    contacto.email = null
    contacto.comentarios = null
}

function validarFormulario(event) {
    event.preventDefault()
    let nombre = inputNombre.value
    let apellido = inputApellido.value
    let email = inputEmail.value
    let tipo = inputTipo.value
    let comentarios = inputComentarios.value
    let contacto = new Contacto(nombre, apellido, email, tipo, comentarios)
    validacionesInputsFormulario(contacto)
    contactos.push(contacto)
    formulario.reset()
    botonSubmit.addEventListener("click", mostrarAlert(contacto))
    almacenarContactoLocalStorage(contacto)
}

function mostrarAlert(contacto) {
    Swal.fire({
        icon: 'success',
        title: `Bienvenido: ${contacto.nombre}`,
        text: `En breve responderemos su ${contacto.tipo}`,
    })
}


//-------------------------- utilice un operador and-------------------------------
function almacenarContactoLocalStorage(contacto) {
    (contacto.nombre, contacto.apellido, contacto.email) !== null && localStorage.setItem("Contactos", JSON.stringify(contactos))
}

function obtenerContactoLocalStorage() {
    let contactosAlmacenados = localStorage.getItem("Contactos")
    if (contactosAlmacenados !== null) {
        contactos = JSON.parse(contactosAlmacenados)
    }
}

function main() {
    inicializarElementos()
    inicializarEventos()
    obtenerContactoLocalStorage()
}

main()