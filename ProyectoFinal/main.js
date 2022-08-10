
// dejo comentadas algunas cosas que no me salieron.

//clases 


function parseJsonToProducto(object) {
    let id = object.id
    let nombre = object.nombre
    let imagen = object.imagen
    let tipo = object.tipo
    let talle = object.talle
    let marca = object.marca
    let precio = object.precio
    return new Producto(id, nombre, imagen, tipo, talle, marca, precio)
}

//todo lo global
let catalogoProductos = []
let carrito
let producto
const iva = 0.21
let divCartas







// funciones
async function inicializarCatalogoProductos() {
    let data = await (await fetch("https://62e2a4b4b54fc209b87dbcaf.mockapi.io/catalogoProductos",{ method: "GET" })).json()
    for (let i = 0; i < data.length; i++){
        producto = new Producto(data[i].id, data[i].nombre, data[i].imagen, data[i].tipo, data[i].talle, data[i].marca, Math.round(data[i].precio))
        catalogoProductos.push(producto)
    }
}

function crearCarta(producto) {
    let crearCarta = `    
    <div class="card col-3 shadow-lg">
    <img src="${producto.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">Talle: ${producto.talle}</p>
            <p class="card-text">Marca: ${producto.marca}</p>
            <p class="card-text">Precio:  $ ${producto.precio}</p>
            <a class="btn btn-primary botonCompra d-flex justify-content-center" id="${producto.id}">Agregar al carrito</a>
        </div>
    </div>
    `
    return crearCarta

}
function limpiarCartas() {
    divCartas = document.getElementById("cards")
    divCartas.innerHTML = ""
}


function cartasIndumentaria(){
    let buscar = catalogoProductos.filter(producto => producto.tipo == "indumentaria")
    let botonIndumentaria = document.getElementById("botonIndumentaria")
        botonIndumentaria.onclick = ()=>{
            limpiarCartas()
            let cardsDiv = document.getElementById("cards")
            buscar.forEach(producto => {
                    cardsDiv.innerHTML += crearCarta(producto)
            })
            let botones = document.getElementsByClassName("botonCompra")
            let arrayDeBotones = Array.from(botones)
            arrayDeBotones.forEach(boton => {
                boton.addEventListener("click", (e) => {
                    let productoSeleccionado = buscar.find(producto => producto.id == e.target.id)
                    carrito.productos.push(productoSeleccionado)
                    renovarStorage()
                })
            })
        }
}
function cartasCalzado(){
    let buscar = catalogoProductos.filter(producto => producto.tipo == "calzado")
    let botonCalzado = document.getElementById("botonCalzado")
        botonCalzado.onclick = ()=>{
            limpiarCartas()
            let cardsDiv = document.getElementById("cards")
            buscar.forEach(producto => {
                    cardsDiv.innerHTML += crearCarta(producto)
            })
            let botones = document.getElementsByClassName("botonCompra")
            let arrayDeBotones = Array.from(botones)
            arrayDeBotones.forEach(boton => {
                boton.addEventListener("click", (e) => {
                    let productoSeleccionado = buscar.find(producto => producto.id == e.target.id)
                    carrito.productos.push(productoSeleccionado)
                    renovarStorage()
                })
            })
        }
}
function cartasAccesorio(){
    let buscar = catalogoProductos.filter(producto => producto.tipo == "accesorio")
    let botonAccesorio = document.getElementById("botonAccesorio")
        botonAccesorio.onclick = ()=>{
            limpiarCartas()
            let cardsDiv = document.getElementById("cards")
            buscar.forEach(producto => {
                    cardsDiv.innerHTML += crearCarta(producto)
            })
            let botones = document.getElementsByClassName("botonCompra")
            let arrayDeBotones = Array.from(botones)
            arrayDeBotones.forEach(boton => {
                boton.addEventListener("click", (e) => {
                    let productoSeleccionado = buscar.find(producto => producto.id == e.target.id)
                    carrito.productos.push(productoSeleccionado)
                    renovarStorage()
                })
            })
        }
}

function renovarStorage() {
    localStorage.removeItem("carrito")
    localStorage.setItem("carrito", JSON.stringify(carrito))
}


function crearCartaHtml() {
    let cardsDiv = document.getElementById("cards")
    catalogoProductos.forEach(producto => {
            cardsDiv.innerHTML += crearCarta(producto)
    })
}

function agregarAlCarrito() {
    let botones = document.getElementsByClassName("botonCompra")
    let arrayDeBotones = Array.from(botones)
    arrayDeBotones.forEach(boton => {
        boton.addEventListener("click", (e) => {
            let productoSeleccionado = catalogoProductos.find(producto => producto.id == e.target.id)
            carrito.productos.push(productoSeleccionado)
            renovarStorage()
        })
    })
}


window.addEventListener('DOMContentLoaded', () => {
    carrito = new Carrito()
    storage = JSON.parse((localStorage.getItem("carrito")))
    if(storage != null) {
        storage.productos.map(element => {
            let productoParseado = parseJsonToProducto(element)
            carrito.productos.push(productoParseado)
        })
    } 
})
function botonTodo(){
    let botonTodo = document.getElementById("botonTodo")
    botonTodo.onclick = ()=>{
        limpiarCartas()
        crearCartaHtml()
        agregarAlCarrito()
    }
}

//funcion principal
async function main() {
    await inicializarCatalogoProductos()
    crearCartaHtml()
    agregarAlCarrito()
    cartasIndumentaria()
    cartasCalzado()
    cartasAccesorio()
    botonTodo()
    
}
main()
