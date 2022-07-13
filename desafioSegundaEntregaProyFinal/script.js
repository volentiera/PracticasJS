//variables
let login = []
let usuario
let contrasenia
let log
let productos = []
let id
let nombre
let tipo
let marca
let precio
let producto
let cartaCreada
let loginAlmacenado

let inputUsuario = document.getElementById("inputUsuario")
let inputContrasenia = document.getElementById("inputContrasenia")
let botonLogin = document.getElementById("botonLogin")

let logear = document.getElementById("logear")
let formulario = document.getElementById("formulario")
let contenedorProductos = document.getElementById("contenedorProductos")
let inputId = document.getElementById("inputId")
let inputNombre = document.getElementById("inputNombre")
let inputMarca = document.getElementById("inputMarca")
let inputPrecio = document.getElementById("inputPrecio")
let inputTipo = document.getElementById("inputTipo")
let cartas = document.getElementById("cartas")


//clases
class Login {
    constructor(usuario, contrasenia) {
        this.usuario = usuario
        this.contrasenia = contrasenia
    }
}
class Productos {
    constructor(id, nombre, marca, tipo, precio) {
        this.id = id
        this.nombre = nombre
        this.marca = marca
        this.tipo = tipo
        this.precio = precio
    }
}

function inicializarEventoLogin() {
    botonLogin.onclick = (event) => validarLogin(event)
}

function almacenarLogin() {
    sessionStorage.setItem("login", JSON.stringify(login));
}


function validarLogin() {
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

function crearElementosDespuesDeLogear() {
    if (loginAlmacenado != undefined) {
        loginAlmacenado = JSON.parse(sessionStorage.getItem("login"))
        if (loginAlmacenado.length > 0) {
            login = loginAlmacenado[0]
            let usuarioLogeado = new Login(login.usuario, login.contrasenia)
            if (usuarioLogeado.usuario == "1234" && usuarioLogeado.contrasenia == "1234") {
                eliminarElementosHTML()
                bienvenida(login)
            }
        } else {
            console.log("usuario sin logearse")
        }

        obtenerLoginSessionStorage()
        inicializarEventoLogin()
    } else {
        return
    }
}

function inicializarEventoStorageProductos() {
    formulario.onsubmit = (event) => validarFormulario(event)

}

function validarFormulario(event) {
    event.preventDefault()
    //generarId()
    id = inputId.value
    nombre = inputNombre.value
    marca = inputMarca.value
    tipo = inputTipo.value
    precio = inputPrecio.value
    producto = new Productos(id, nombre, marca, tipo, precio)
    productos.push(producto)
    formulario.reset()

    mostrarProductos()
    almacenarProductosLocalStorage()
}

function eliminarElementosHTML() {
    inputUsuario.remove()
    inputContrasenia.remove()
    botonLogin.remove()
}

function bienvenida(login) {
    logear.innerHTML = `
    <h2>Bienvenido ${login.usuario}</h2>
    `
    logear.append()
}

function almacenarProductosLocalStorage() {
    localStorage.setItem("listaProductos", JSON.stringify(productos))
}

function obtenerProductosLocalStorage() {
    let productosAlmacenados = localStorage.getItem("listaProductos");
    if (productosAlmacenados !== null) {
        productos = JSON.parse(productosAlmacenados);
    }
}

function mostrarProductos() {
    productos.forEach((producto) => {
        cartaCreada = document.createElement("div");
        cartaCreada.className = ("card col-4")
        cartaCreada.innerHTML = `
            <div class="card-tittle">
            ${producto.nombre}
            </div>
            <div class="card-text">${producto.marca}</div>
            <div class="card-text">${producto.precio}</td>
            `;
    });
    cartas.append(cartaCreada)
}

function main() {
    obtenerLoginSessionStorage()
    inicializarEventoLogin()
    crearElementosDespuesDeLogear()

    inicializarEventoStorageProductos()
    obtenerProductosLocalStorage()
    mostrarProductos()

}
main()