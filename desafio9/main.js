
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
let data
let resultado


// funciones
function inicializarCatalogoProductos() {
    fetch("https://62e2a4b4b54fc209b87dbcaf.mockapi.io/catalogoProductos",{
        method: "GET"
    })
    .then((resultado) => resultado.json())
    .then((data) => {
        
        for (let i = 0; i < data.length; i++){
            producto = new Producto(data[i].id, data[i].nombre, data[i].imagen, data[i].tipo, data[i].talle, data[i].marca, data[i].precio)
            catalogoProductos.push(producto)
            console.log(producto)
        }
        
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
        console.log(catalogoProductos)
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
    console.log(producto)
    crearCartaHtml()
    guardarCarrito()
    agregarAlCarrito()
}
main()
