// Ejercicio 7
let num1=parseInt(prompt("Ingrese el primer numero"))
let num2=parseInt(prompt("Ingrese el segundo numero"))
let num3=parseInt(prompt("Ingrese el tercero numero"))
if(num1>num2){
    if(num1>num3){
        document.write(`El numero ${num1} es el mayor`)
    }else{
        document.write(`El numero ${num3} es el mayor`)
    }
}else{
    if(num2>num3){
        document.write(`El numero ${num2} es el mayor`)
    }else{
        document.write(`El numero ${num3} es el mayor`)
    }
}