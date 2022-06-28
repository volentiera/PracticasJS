//Programa que al ingresar un numero del 1 al 4 te define el precio sacando iva y se van sumando los precios de los packs
//y se puede seguir comprando.

//variables

let nombre = ""
let productos = ""
let cantidad = 0
let precio = 0

let packAComprar = ""
let sumatoriaFinal = 0
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
    constructor(nombre, productos, cantidad, precio) {
        this.nombre = nombre.toUpperCase()
        this.productos = productos
        this.cantidad = cantidad
        this.precio = precio
    }
    
    sumatoriaTotal = () => this.precio
    
}

function elegirPack() {
    let ingresoPack = parseInt(prompt("Ingrese su numero correspondiente \n 1-Pack Beginner \n 2-Pack Advanced \n 3-Pack Premium \n 4-Pack Pro  "))
    let packs = []
    if ((ingresoPack !== "") && (ingresoPack <= 4) && (ingresoPack > 0)) {
            switch (ingresoPack) {
                case 1:
                    nombre = "Pack1"
                    productos = "Manzana,Banana"
                    cantidad = 100
                    precio = 450
                    packAComprar = new Pack(nombre, productos, cantidad, precio)
                    packs.push(packAComprar)
                    break
                case 2:
                    nombre = "Pack2"
                    productos = "Tomate,Zanahoria"
                    cantidad = 200
                    precio = 250
                    packAComprar = new Pack(nombre, productos, cantidad, precio)
                    packs.push(packAComprar)
                    break
                case 3:
                    nombre = "Pack3"
                    productos = "Uvas, Naranja"
                    cantidad = 500
                    precio = 150
                    packAComprar = new Pack(nombre, productos, cantidad, precio)
                    packs.push(packAComprar)
                    break
                case 4:
                    nombre = "Pack4"
                    productos = "Sandia, Melon"
                    cantidad = 50
                    precio = 400
                    packAComprar = new Pack(nombre, productos, cantidad, precio)
                    packs.push(packAComprar)
                    break
            }
        } else {
            alert("ingrese un numero de producto")
            elegirPack()
        }
    return packs
}

function mostrarResultado(packs){
    for (const valor of packs){
        console.log(valor)
        console.log(valor.nombre)
    }
}

function sumatoriaTotal(packs){
    for (const valor of packs){
        sumatoriaFinal += (valor.precio * 0.21) + (valor.precio)
    }  
    return sumatoriaFinal
}



//programa

do {
    let packs = elegirPack()
    mostrarResultado(packs)
    alert("El costo total de los packs es: " + sumatoriaTotal(packs))

} while (continuar())
