
// dejo comentadas algunas cosas que no me salieron.

//clases 


class Carrito {
    constructor(id) {
        this.id = id
        this.productos = []
    }

    calcularTotal() {
        let total = 0
        for (let i = 0; i < this.productos.length; i++) {
            total = total + this.productos[i].precio

        }return Math.round(total)
    }

}
//todo lo global

let carrito
//let botonEliminar
let divCarrito
//let botonesEliminar
let carritoGuardado
let storage
// funciones


function crearCarrito(producto) {
    let crearCarrito = `
    <div class="row border-bottom">
    <div class="col-3">
        <img src="${producto.imagen}" class="modificarImagenCarrito" alt="...">
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


function guardarCarrito() {
    window.addEventListener('DOMContentLoaded', (e) => {
        storage = JSON.parse((localStorage.getItem("carrito")))
        carritoGuardado = new Carrito(storage.id, storage.productos)
        storage.productos.forEach(producto => {
            carritoGuardado.productos.push(producto)
        })
        
        limpiarCarrito()
        actualizarCarrito(carritoGuardado)
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
    guardarCarrito()
}
main()
