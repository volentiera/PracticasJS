
// multiplica un numero con otro al ingresar ambos, y continua si el total es menor a 100.

let total = 0
let numero = 0
let multiplica = 0

while (total<= 100){
    let numero = parseInt(prompt("Ingrese un numero: "))
    let multiplica = parseInt(prompt("Ingrese un numero para multiplicar el primer numero: "))
    total = numero*multiplica
    alert("El total es: " + total)
    
}