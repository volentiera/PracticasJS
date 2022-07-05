//Programa que al ingresar un numero del 1 al 4 te define el precio sacando iva, se van sumando los precios de los packs
//y se puede seguir comprando.

//variables y constantes

let nombre = ""
let productos = ""
let cantidad = 0
let precio = 0
let id = 0
let packAComprar = ""
let sumarTotales = 0
let packs = []
const iva = 0.21
let sumarTotalesConIva = 0
let sumaFinal = 0
let ingreso = ""
let contenedorPacks = 0
let columna = ""
let contenedorTotales = 0

//funciones

//funcion para ver si continua el bucle o no

function continuar() {
    let x = prompt("Precione aceptar o Enter si desea seguir comprando.")
    if (x == "") {
        x = true
        return x
    } else {
        x = false
        alert("Gracias por su compra")
        return x
    }
}

//funcion constructora

class Pack {
    constructor(id, nombre, productos, cantidad, precio) {
        this.id = id
        this.nombre = nombre.toUpperCase()
        this.productos = productos
        this.cantidad = cantidad
        this.precio = precio
    }
}

//funcion principal

function elegirPack() {
    let ingresoPack = parseInt(prompt("Ingrese su numero correspondiente \n 1-Pack Frutas \n 2-Pack Verduras \n 3-Pack Carnes \n 4-Pack de todo "))

    if ((ingresoPack !== "") && (ingresoPack <= 4) && (ingresoPack > 0)) {
            switch (ingresoPack) {
                case 1:
                    id = 1
                    nombre = "Pack Frutas"
                    productos = "Manzana,Banana"
                    cantidad = 100
                    precio = 450
                    packAComprar = new Pack(id, nombre, productos, cantidad, precio)
                    packs.push(packAComprar)
                    break
                case 2:
                    id = 2
                    nombre = "Pack Verduras"
                    productos = "Tomate,Zanahoria"
                    cantidad = 200
                    precio = 250
                    packAComprar = new Pack(id, nombre, productos, cantidad, precio)
                    packs.push(packAComprar)
                    break
                case 3:
                    id = 3
                    nombre = "Pack Carnes"
                    productos = "Asado, Costillas"
                    cantidad = 50
                    precio = 650
                    packAComprar = new Pack(id, nombre, productos, cantidad, precio)
                    packs.push(packAComprar)
                    break
                case 4:
                    id = 4
                    nombre = "Pack de todo"
                    productos = "Asado, Verduras, Frutas"
                    cantidad = 30
                    precio = 1580
                    packAComprar = new Pack(id, nombre, productos, cantidad, precio)
                    packs.push(packAComprar)
                    break
            }
        } else {
            alert("ingrese un numero de producto")
            elegirPack()
        }
    return packs
}

//utilizo for each

function mostrarPacksComprados(packs){
    packs.forEach( (element) => {
        contenedorPacks = document.getElementById("contenedorCartas")
        columna = document.createElement("div")
        columna.id = `columna-${element.id}`
        columna.className = "col-md-4 mt-3"
        columna.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <p class="card-text">Nombre Pack: <b>${element.nombre}</b></p>
                    <p class="card-text">Productos: <b>${element.productos}</b></p>
                    <p class="card-text">Cantidad: <b>${element.cantidad}</b></p>
                    <p class="card-text">Precio: <b>${element.precio}</b></p>
                </div>
            </div>
        `
        contenedorPacks.append(columna)

    })
}


//utilizo reduce

function sumaSinImpuestos(packs){
    sumarTotales = packs.reduce(
    (acumulador, elemento) => acumulador + elemento.precio, 0)
    return sumarTotales
}

function sumaConImpuestos(packs){
    sumarTotalesConIva = packs.reduce(
    (acumulador, elemento) => acumulador + elemento.precio, 0)

    sumaFinal = sumarTotalesConIva * iva + sumarTotalesConIva

    return sumaFinal
}

function mostrarTotales(){
    contenedorTotales = document.getElementById("contenedorTotales")
    columna = document.createElement("div")
    columna.className = "col-md-12 mt-3"
    columna.innerHTML = `
        <div>
            <h3 class="text-center">La suma sin impuestos es: ${Math.round(sumarTotales)}</h3>
            <h3 class="text-center">La suma total es: ${Math.round(sumaFinal)}</h3>
        </div>
    `
    contenedorTotales.append(columna)
}


//programa
function main(){
    do {
        elegirPack()
    } while (continuar())

    mostrarPacksComprados(packs)
    sumaSinImpuestos(packs)
    sumaConImpuestos(packs)
    mostrarTotales(packs)
    

}
main()



