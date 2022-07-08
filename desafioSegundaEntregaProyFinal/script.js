//variables
let login = []
let usuario
let contrasenia
let log
//let productos = []

let inputUsuario = document.getElementById("inputUsuario")
let inputContrasenia = document.getElementById("inputContrasenia")
let botonLogin = document.getElementById("botonLogin")

let logear = document.getElementById("logear")


//clases
class Login {
    constructor(usuario, contrasenia) {
        this.usuario = usuario
        this.contrasenia = contrasenia
    }
}
/*class Productos {
    constructor(id, nombre, marca, tipo, precio) {
        this.id = id
        this.nombre = nombre
        this.marca = marca
        this.tipo = tipo
        this.precio = precio
    }
}*/

function inicializarEventoLogin(){
    logear.onsubmit = (event) => validarLogin(event)
}

function almacenarLogin(){
    sessionStorage.setItem("login", JSON.stringify(login));
}


function validarLogin(event){
    event.preventDefault()
    usuario = inputUsuario.value
    contrasenia = inputContrasenia.value
    log = new Login(usuario, contrasenia)
    login.push(log)
    

    almacenarLogin()
    
    
}

function obtenerLoginSessionStorage() {
    let loginAlmacenado = sessionStorage.getItem("login");
    if (loginAlmacenado !== null) {
        login = JSON.parse(loginAlmacenado);
    }
}

function crearElementosDespuesDeLogear(){
    let loginAlmacenado = new Login(sessionStorage.getItem("login").usuario, sessionStorage.getItem("login").contrasenia)
    console.log(loginAlmacenado)
    if (loginAlmacenado.usuario == usuario && loginAlmacenado.contrasenia == contrasenia){
        console.log("esta bien")
    }

}


obtenerLoginSessionStorage()
inicializarEventoLogin()
crearElementosDespuesDeLogear()










