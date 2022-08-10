




//todo lo global

let divCarrito = null
let storage
let carrito
let producto
let productoParseado
const iva = 0.21
// funciones


function limpiarCarrito() {
    divCarrito = document.getElementById("carrito")
    divCarrito.innerHTML = ""
}

function verTotalCarrito(carrito) {
    if (divCarrito == null){
    }else{
    divCarrito.innerHTML += `
    <div class="separador50"></div>
    <div class="d-flex justify-content-between align-items-center"">
        <div>
            <h1 class="text-center">Precio Total: $ ${carrito.calcularTotal()}</h1>
        </div>
        <div class="justify-content-end">
            <button type="button" class="btn btn-primary" id="botonConfirmar">Confirmar Compra</button>
            <button type="button" class="btn btn-danger" id="botonEliminar">Eliminar Articulos</button>
        </div>
    </div>
    <div class="separador50"></div>
    `
    }
}

// window.addEventListener('DOMContentLoaded', (e) => {
//     storage = JSON.parse((localStorage.getItem("carrito")))
//     carritoGuardado = new Carrito(storage.productos)
//     storage.productos.forEach(producto => {
//         carritoGuardado.productos.push(producto)
//     })
//     limpiarCarrito()
// })
function crearCarrito(){
    carrito.productos.forEach((element,index) => {
        divCarrito = document.getElementById("carrito")
        divCarrito.innerHTML +=
        `
        <div id="producto-${index}" class="row border-bottom">
            <div class="col-3">
                <img src="${element.imagen}" class="modificarImagenCarrito" alt="..."/>
            </div>
            <div class="col-9 d-flex justify-content-between align-items-center text-center">
                <div class="col-1">
                    <h5>${index+1}-</h5>
                </div>
                <div class="col">
                    <h5>${element.nombre}</h5>
                </div>
                <div class="col">
                    <h5>Precio: $${element.precio}</h5>
                </div>
                <div class="col">
                    <h5>Talle: ${element.talle}</h5>
                </div>

            </div>
        </div>
        `
    })
}
function parseJsonToProducto(object) {
    let id = object.id
    let nombre = object.nombre
    let imagen = object.imagen
    let tipo = object.tipo
    let talle = object.talle
    let marca = object.marca
    let precio = object.precio
    return new Producto(id, nombre, imagen, tipo, talle, marca, Math.round(precio))
}

window.addEventListener('DOMContentLoaded', () => {
    carrito = new Carrito()
    storage = JSON.parse((localStorage.getItem("carrito")))
    if(storage != null) {
        storage.productos.map(element => {
            productoParseado = parseJsonToProducto(element)
            carrito.productos.push(productoParseado)
        })
    }
    crearCarrito()
    verTotalCarrito(carrito)
    comprarYSubirApi()
    eliminarDelCarrito()
    
})

function borrarTodo(){
        carrito = []
        productoParseado = []
        localStorage.clear()
}
function comprarYSubirApi(){
    let botones = document.getElementById("botonConfirmar")
    if (botones != null){
        botones.addEventListener("click", () => {
            subirApi()
            borrarTodo()
            limpiarCarrito()
    })
}
}
function subirApi(){
    localStorage.getItem("carrito",JSON.stringify(carrito))
    let carritoAlmacenado = localStorage.getItem("carrito")
    if (carritoAlmacenado !== null) {
        contactos = JSON.parse(carritoAlmacenado)
        console.log(carritoAlmacenado)
    }
    fetch ("https://62e2a4b4b54fc209b87dbcaf.mockapi.io/CarritoComprado",{
        method: "POST",
        body: carritoAlmacenado,
        headers: {
            "Content-type": "application/json"
        }
    }).then(response => response.json())
    .then(data => data)
}

function eliminarDelCarrito(){
    let botones = document.getElementById("botonEliminar")
    if (botones != null){
        botones.addEventListener("click", () => {
            borrarTodo()
            limpiarCarrito()
        })
    }
}

//funcion principal
// function main() {
//     eliminarDelCarrito()
// }

// main()