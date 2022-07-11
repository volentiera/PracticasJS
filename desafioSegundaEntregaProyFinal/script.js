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

let inputUsuario = document.getElementById("inputUsuario")
let inputContrasenia = document.getElementById("inputContrasenia")
let botonLogin = document.getElementById("botonLogin")

let formulario = document.getElementById("formulario")
let contenedorProductos = document.getElementById("contenedorProductos")
let inputId = document.getElementById("inputId")
let inputNombre = document.getElementById("inputNombre")
let inputMarca = document.getElementById("inputMarca")
let inputPrecio = document.getElementById("inputPrecio")
let inputTipo = document.getElementById("inputTipo")



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

function inicializarEventoLogin(){
    botonLogin.onclick = (event) => validarLogin(event)
}

function almacenarLogin(){
    sessionStorage.setItem("login", JSON.stringify(login));
}


function validarLogin(){
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
    
    let loginAlmacenado = JSON.parse(sessionStorage.getItem("login"))
    if (loginAlmacenado.length > 0){
        login = loginAlmacenado[0]
        let usuarioLogeado = new Login(login.usuario, login.contrasenia)
        if (usuarioLogeado.usuario == "1234" && usuarioLogeado.contrasenia == "1234"){
            crearElementos()
        }
    }else {
        console.log("usuario sin logearse")
    }
    
    obtenerLoginSessionStorage()
    inicializarEventoLogin()
}
function crearElementos(){
    let formulario = document.createElement("form")
    formulario.id = "formulario"
    formulario.innerHTML =`
            <div class="mb-3">
            <label class="form-label">ID:</label>
            <input
                type="number"
                class="form-control"
                id="inputId"
            />
            </div>
            <div class="mb-3">
            <label class="form-label">Nombre:</label>
            <input
                type="text"
                class="form-control"
                id="inputNombre"
            />
            </div>

            <div class="mb-3">
            <label class="form-label">Marca:</label>
            <input
                type="text"
                class="form-control"
                id="inputMarca"
            />
            </div>

            <div class="mb-3">
                <label class="form-label">Tipo:</label>
                <input type="text" class="form-control" id="inputTipo" />
            </div>

            <div class="mb-3">
                <label class="form-label">Precio:</label>
                <input type="number" class="form-control" id="inputPrecio" />
            </div>

            <div class="d-grid gap-2">
                <button type="submit" class="btn btn-primary">Registrar</button>
            </div>`
    contenedorProductos.append(formulario)
}

function inicializarEventoStorageProductos(){
    formulario.onsubmit = (event) => validarFormulario(event)
}

function validarFormulario(event){
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
    
    almacenarProductosLocalStorage()
}
/*
function generarId(productos){
    for (let index = 0; index < productos.length; index++) {
        id = productos[index];
        
    }
    return id
}*/
function  almacenarProductosLocalStorage(){
    localStorage.setItem("listaProductos", JSON.stringify(productos))
}
function obtenerProductosLocalStorage() {
    let productosAlmacenados = localStorage.getItem("listaProductos");
    
    if (productosAlmacenados !== null) {
        productos = JSON.parse(productosAlmacenados);
    }
}
function main(){
    obtenerLoginSessionStorage()
    inicializarEventoLogin()
    crearElementosDespuesDeLogear()
    inicializarEventoStorageProductos()
    obtenerProductosLocalStorage()
}
main()









