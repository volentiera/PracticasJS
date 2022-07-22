//linea 73 y 48 hago sweetalerts y las muestro en linea 66 y 69 dependiendo si es correcto o no el input

let contactos = []

let formulario
let inputNombre
let inputApellido
let inputEmail
let inputTipo
let inputComentarios
let botonSubmit
let nombre
let apellido
let email
let tipo
let comentarios

let contacto



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

// inicia el programa al hacer click en el boton
function inicializarEventos() {
    botonSubmit.onclick = (event) => validarFormulario(event)
}

// muestra alert si los valores ingresados son no validos
function alertError(){
        Swal.fire({
            icon: 'error',
            title: `Ingrese Nombre, Apellido y Email`,
        })
}

function validarFormulario(event) {
    event.preventDefault()
    nombre = inputNombre.value
    apellido = inputApellido.value
    email = inputEmail.value
    tipo = inputTipo.value
    comentarios = inputComentarios.value
    contacto = new Contacto(nombre, apellido, email, tipo, comentarios)
    if ((nombre !== "") && (apellido !== "") && (email !== "")){
    contactos.push(contacto)
    formulario.reset()
    botonSubmit.addEventListener("click", alertSuccess(contacto))
    almacenarContactoLocalStorage()
    }else {
        botonSubmit.addEventListener("click", alertError())
    }
}

// muestra alert si los valores ingresados son validos
function alertSuccess(contacto) {
    Swal.fire({
        icon: 'success',
        title: `Bienvenido: ${contacto.nombre}`,
        text: `En breve responderemos su ${contacto.tipo}`,
    })
}



function almacenarContactoLocalStorage() {
        localStorage.setItem("Contactos", JSON.stringify(contactos))
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