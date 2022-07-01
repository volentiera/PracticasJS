//Programa que al ingresar un numero del 1 al 4 te define el precio sacando iva, se van sumando los precios de los packs
//y se puede seguir comprando.

//variables

let nombre = ""
let productos = ""
let cantidad = 0
let precio = 0
let id = 0
let packAComprar = ""

let packs = []
//funciones


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



class Pack {
    constructor(id, nombre, productos, cantidad, precio) {
        this.id = id
        this.nombre = nombre.toUpperCase()
        this.productos = productos
        this.cantidad = cantidad
        this.precio = precio
    }
}

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

function mostrarPacksComprados(packs){
    packs.forEach( (element) => {
        
        console.log(`Nombre del pack: ${element.nombre}`)
        console.log(`Contiene: ${element.productos}`)
        console.log("Mas detalles: ")
        console.log(element)
    })
}

const sumarTotales = packs.reduce((acumulador, elemento) => acumulador + elemento.precio, 0)


function sumatoriaTotal(packs){
    let sumatoriaFinal = 0
    for (const valor of packs){
        sumatoriaFinal += (valor.precio)
    }  
    return sumatoriaFinal
}

function sumatoriaIvaTotal(){
    let sumatoriaIva = 0
    for (const valor of packs){
        sumatoriaIva += (valor.precio * 0.21) + (valor.precio)
    }  
    return Math.round(sumatoriaIva)
}


//programa

do {
    
    let packs = elegirPack()
    

    alert(`El costo total de los packs sin impuestos es: ${sumatoriaTotal(packs)}`)
    alert(`El costo total de los packs es: ${sumatoriaIvaTotal(packs)}`)
    
    let ingreso = prompt("Ingrese SI para ver el total final en consola")
    
    if (ingreso == "SI") {
        mostrarPacksComprados(packs)
    }
    
    console.log(sumarTotales)
} while (continuar())

console.log(sumarTotales)


