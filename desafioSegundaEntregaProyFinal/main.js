
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
    

    //-------------------------------- no se donde llamar este metodo para que aplique, o si esta bien hecho.
    // aumentoPorTalle(){
    //     let totalTalle = 0
    //     if (this.talle == "XL"){
    //         totalTalle = this.precio = this.precio + (this.precio * 0.20)
    //     }
    //     return totalTalle
    // }
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
const iva = 0.21

// funciones
function inicializarCatalogoProductos() {
    
    producto1 = new Producto(1, "Camiseta River", "camisetaRiver.jpg", "Indumentaria", "S", "Addidas", 8500)
    producto2 = new Producto(2, "Botines F500", "botinesAddidas.jpg", "Calzado", "38", "Addidas", 15600)
    producto3 = new Producto(3, "Remera Deportiva", "remeraNike.jpg", "Indumentaria", "XL", "Nike", 5800)
    producto4 = new Producto(4, "Raqueta Tennis", "raquetaHead.jpg", "Accesorio", "15", "Head", 16500)
    catalogoProductos.push(producto1)
    catalogoProductos.push(producto2)
    catalogoProductos.push(producto3)
    catalogoProductos.push(producto4)
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

function crearCarrito(producto) {
    let crearCarrito = `
    <div class="row border-bottom">
    <div class="col-3">
        <img src="./imagenes/${producto.imagen}" class="modificarImagenCarrito" alt="...">
    </div>
    <div class="col-9 d-flex justify-content-between align-items-center text-center">
            <div class="col-1">
                <h5>${producto.id}-</h5>
            </div>
            <div class="col">
                <h5>${producto.nombre}</h5>
            </div>
            <div class="col">
                <h5>Precio: $${producto.precio}</h5>
            </div>
            <div class="col">
                <h5>Talle: ${producto.talle }</h5>
            </div>
            <div class="col">
                <a class="btn btn-primary botonEliminar">X</a>
            </div>
    </div>
    </div>
    `
    return crearCarrito
}


function limpiarCarrito() {
    divCarrito = document.getElementById("carrito")
    divCarrito.innerHTML = ""
}

function actualizarCarrito(carrito) {
    divCarrito = document.getElementById("carrito")
    carrito.productos.forEach(producto => {
        divCarrito.innerHTML += crearCarrito(producto)
    })
    divCarrito.innerHTML += `
    <div class="separador50"></div>
    <h1 class="text-center">Precio Total: $ ${carrito.calcularTotal()}</h1>
    <div class="separador50"></div>
    `
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
        limpiarCarrito()
        actualizarCarrito(carritoGuardado)
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
            limpiarCarrito()
            actualizarCarrito(carrito)
            renovarStorage()
        })
    })
}

// ------------ intente hacer que el boton eliminar elimine un objeto del carrito dependiendo de cual apretas pero no me salio
// function eliminarDelCarrito() {
//     botonesEliminar = document.getElementsByClassName("botonEliminar")
//     arrayDeBotones = Array.from(botonesEliminar)
//     arrayDeBotones.forEach(boton => {
//         boton.addEventListener("click", (e) => {
//             let productoSeleccionadoAEliminar = carritoGuardado.find(producto => producto.id == e.target.id)
//             carrito.productos.splice(productoSeleccionadoAEliminar)
//             limpiarCarrito()
//             actualizarCarrito(carrito)
//             renovarStorage()
//         })
//     })
// }


//funcion principal
function main() {
    inicializarCatalogoProductos()
    crearCartaHtml()
    guardarCarrito()
    agregarAlCarrito()
    
    //eliminarDelCarrito()
}
main()
