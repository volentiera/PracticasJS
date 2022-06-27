//Programa que al ingresar un numero del 1 al 4 te define el precio sacando iva y luego podes elegir la opcion de pago 
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



const seisCuotas = valor => valor / 6

const porcentaje = valor => valor * 0.10

const mitadEfectivo = valor => valor * 0.5

const doceCuotas = valor => (valor / 24) + ((valor / 24) * 0.10)

class Pack {
    constructor(nombre, productos, cantidad, precio) {
        this.nombre = nombre.toUpperCase()
        this.productos = productos
        this.cantidad = cantidad
        this.precio = precio
    }
    iva = () => this.precio * 0.21
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
        sumatoriaFinal += valor.precio
    }  
    return sumatoriaFinal
}

/*
function menu(){
    let ingresoProducto = parseInt(prompt("Ingrese su numero correspondiente \n 1-Pack Beginner \n 2-Pack Advanced \n 3-Pack Premium \n 4-Pack Pro  "))
    if ((ingresoProducto !== "") && (ingresoProducto <= 4) && (ingresoProducto > 0)) {
        switch (ingresoProducto) {
            case 1:
                producto = 500
                total = producto + iva(producto)
                alert("Su producto elegido es: " + " Pack Beginner " + "El valor es: $ " + total)
                break
            case 2:
                producto = 800
                total = producto + iva(producto)
                alert("Su producto elegido es: " + " Pack Advanced " + "El valor es: $ " + total)
                break
            case 3:
                producto = 1350
                total = producto + iva(producto)
                alert("Su producto elegido es: " + " Pack Premium " + "El valor es: $ " + total)
                break
            case 4:
                producto = 1680
                total = producto + iva(producto)
                alert("Su producto elegido es: " + " Pack Pro " + "El valor es: $ " + total)
                break
        }
    } else {
        alert("ingrese un numero de producto")
        menu()
    }
}
*/
/*function pago() {
    let ingresoPago = parseInt(prompt("Ingrese su numero correspondiente \n 1-Pago en 6 cuotas sin interes \n 2-En efectivo 10% descuento \n 3-50% efectivo el resto en 24 cuotas con 10% recargo"))
    if ((ingresoPago !== "") && (ingresoPago <= 3) && (ingresoPago > 0)){
        switch (ingresoPago){
            case 1:
                let totalEnCuotas = seisCuotas(total)
                alert("El total es: $" + totalEnCuotas + " Por cuota")
                break
            case 2:
                let totalEfectivo = producto - porcentaje(total)
                alert("El total es: $" + totalEfectivo)
                break
            case 3:
                let totalEfectivo2 = mitadEfectivo(total)
                let totalEnCuotas2 = doceCuotas(total)
                alert("El total es : \n" + "$ " + totalEfectivo2 + " en un pago\n" + "$ " + totalEnCuotas2 + " En 12 cuotas" )
                break
        }
    } else {
        
        alert("ingrese un numero del 1 al 3 para seleccionar su forma de pago")
        pago()
        
    }
}
*/

//programa

do {
    let packs = elegirPack()
    mostrarResultado(packs)
    alert("El costo total de los packs es: " + sumatoriaTotal(packs))
    
} while (continuar())
