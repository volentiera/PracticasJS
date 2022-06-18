
//Programa que al ingresar un numero del 1 al 4 te define el precio sacando iva y luego podes elegir la opcion de pago 
//y se puede seguir comprando.


let producto = 0;

function continuar() {
    let x = prompt("Ingrese SI si desea seguir comprando.")
    if (x == "SI") {
        x = true
        return x
    } else {
        x = false
        alert("Gracias por su compra")
        return x
    }
}

function iva(valor) {
    return valor * 0.21
}
function seisCuotas(valor){
    return valor / 6
}
function porcentaje(valor){
    return valor * 0.10
}
function mitadEfectivo(valor){
    return valor * 0.5
}
function doceCuotas(valor) {
    return (valor / 24) + ((valor/24)*0.10)
}
do {
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
    }

    let ingresoPago = parseInt(prompt("Ingrese su numero correspondiente \n 1-Pago en 6 cuotas sin interes \n 2-En efectivo 10% descuento \n 3-50% efectivo el resto en 24 cuotas con 10% recargo"))
    if ((ingresoPago != "") && (ingresoPago <= 3) && (ingresoPago > 0)){
        switch (ingresoPago){
            case 1:
                totalEnCuotas = seisCuotas(total)
                alert("El total es: $" + totalEnCuotas + " Por cuota")
                break
            case 2:
                totalEfectivo = producto - porcentaje(total)
                alert("El total es: $" + totalEfectivo)
                break
            case 3:
                totalEfectivo2 = mitadEfectivo(total)
                totalEnCuotas2 = doceCuotas(total)
                alert("El total es : \n" + "$ " + totalEfectivo2 + " en un pago\n" + "$ " + totalEnCuotas2 + " En 12 cuotas" )

        }

    } else {
        alert("ingrese un numero del 1 al 3 para seleccionar su forma de pago")
    }
} while (continuar())