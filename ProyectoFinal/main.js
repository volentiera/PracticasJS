
// dejo comentadas algunas cosas que no me salieron.

//clases 

class Producto {
    constructor(id, nombre, imagen, tipo, talle, marca, precio) {
        this.id = id
        this.nombre = nombre
        this.imagen = imagen
        this.tipo = tipo
        this.talle = talle
        this.marca = marca
        this.precio = (precio * iva) + precio
    }

}

class Carrito {
    constructor(id) {
        this.id = id
        this.productos = []
    }

    calcularTotal() {
        let total = 0
        for (let i = 0; i < this.productos.length; i++) {
            total = total + this.productos[i].precio

        }return total
    }

}
//todo lo global
let catalogoProductos = []
let cardsDiv
let carrito
let botones
let arrayDeBotones
let botonEliminar
let divCarrito
let botonesEliminar
let carritoGuardado
let producto
const iva = 0.21
const searchInput = document.querySelector("[data-search]")



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


function renovarStorage() {
    localStorage.removeItem("carrito")
    localStorage.setItem("carrito", JSON.stringify(carrito))
}


function guardarCarrito() {
    window.addEventListener('DOMContentLoaded', (e) => {
        let storage = JSON.parse((localStorage.getItem("carrito")))
        if (storage != null){
            carritoGuardado = new Carrito(storage.id, storage.productos)
            storage.productos.forEach(producto => {
                carritoGuardado.productos.push(producto)
            })
        }
    })
}




function crearCartaHtml() {
    cardsDiv = document.getElementById("cards")
    catalogoProductos.forEach(producto => {
        cardsDiv.innerHTML += crearCarta(producto)
    })
}

function agregarAlCarrito() {
    carrito = new Carrito(1)
    botones = document.getElementsByClassName("botonCompra")
    arrayDeBotones = Array.from(botones)
    arrayDeBotones.forEach(boton => {
        boton.addEventListener("click", (e) => {
            let productoSeleccionado = catalogoProductos.find(producto => producto.id == e.target.id)
            carrito.productos.push(productoSeleccionado)
            renovarStorage()
        })
    })
}
let variable

//------------------------------------buscador---------------------------------------------
function buscarCartas(){
    searchInput.addEventListener("input", e =>{
        const value = e.target.value.toLowerCase()
        catalogoProductos.forEach(producto =>{
            const esVisible = producto.nombre.toLowerCase().includes(value) || producto.marca.toLowerCase().includes(value)
                console.log(esVisible)
        })
    })
}

//funcion principal
async function main() {
    await inicializarCatalogoProductos()
    crearCartaHtml()
    buscarCartas()
    guardarCarrito()
    agregarAlCarrito()
}
main()
