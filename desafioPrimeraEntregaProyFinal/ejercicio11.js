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
        
        console.log(`Nombre del pack: ${element.nombre}`)
        console.log(`Contiene: ${element.productos}`)
        console.log("Mas detalles: ")
        console.log(element)
    })
}


//utilizo reduce

function sumaSinImpuestos(packs){
    sumarTotales = packs.reduce(
    (acumulador, elemento) => acumulador + elemento.precio, 0)
    return console.log(`El costo total de los packs sin impuestos es: ${sumarTotales}`)
}

function sumaConImpuestos(packs){
    sumarTotalesConIva = packs.reduce(
    (acumulador, elemento) => acumulador + elemento.precio, 0)

    sumaFinal = sumarTotalesConIva * iva + sumarTotalesConIva

    return console.log(`El costo total de los packs con impuestos es: ${Math.round(sumaFinal)}`)
}


//programa
function main(){
    do {
    
        let packs = elegirPack()
        
        
        let ingreso = prompt("Ingrese SI para ver el total final en consola")
        
        if (ingreso == "SI") {
            mostrarPacksComprados(packs)
            sumaSinImpuestos(packs)
            sumaConImpuestos(packs)
        }
        
        
    } while (continuar())
}
main()



