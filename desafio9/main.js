
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
let producto1
let producto2
let producto3
let producto4
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

// funciones
function inicializarCatalogoProductos() {
    fetch("https://62e2a4b4b54fc209b87dbcaf.mockapi.io/catalogoProductos")
    .then((resultado) => resultado.json())
    .then((data) => {
        for (let i = 0; i < data.length; i++){
            producto = new Producto(data[i].id, data[i].nombre, data[i].imagen, data[i].tipo, data[i].talle, data[i].marca, data[i].precio)
            catalogoProductos.push(producto)
            console.log(producto)
        }
        // producto1 = new Producto(data[0].id, data[0].nombre, data[0].imagen, data[0].tipo, data[0].talle, data[0].marca, data[0].precio)
        // producto2 = new Producto(data[1].id, data[1].nombre, data[1].imagen, data[1].tipo, data[1].talle, data[1].marca, data[1].precio)
        // producto3 = new Producto(data[2].id, data[2].nombre, data[2].imagen, data[2].tipo, data[2].talle, data[2].marca, data[2].precio)
        // producto4 = new Producto(data[3].id, data[3].nombre, data[3].imagen, data[3].tipo, data[3].talle, data[3].marca, data[3].precio)
    
        // catalogoProductos.push(producto1)
        // catalogoProductos.push(producto2)
        // catalogoProductos.push(producto3)
        // catalogoProductos.push(producto4)
    })
    
    console.log(catalogoProductos)
}


function crearCarta(producto) {
    let crearCarta = `    
    <div class="card col shadow-lg">
    <img src="./imagenes/${producto.imagen}" class="card-img-top" alt="...">
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
        carritoGuardado = new Carrito(storage.id, storage.productos)
        storage.productos.forEach(producto => {
            carritoGuardado.productos.push(producto)
        })
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


//funcion principal
function main() {
    inicializarCatalogoProductos()
    crearCartaHtml()
    guardarCarrito()
    agregarAlCarrito()
}
main()
