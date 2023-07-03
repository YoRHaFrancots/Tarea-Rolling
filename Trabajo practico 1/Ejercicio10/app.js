// Ejercicio 10
let num1=parseInt(prompt("Ingrese el primer numero"))

if(num1%2==0){
    document.write(`El numero ${num1} es divisible por 2`)
    }else{
    if(num1%3==0){
        document.write(`El numero ${num1} es divisible por 3`)
    }else{
        if(num1%5==0){
            document.write(`El numero ${num1} es divisible por 5`)  
        }else{
            if(num1%7==0){
                document.write(`El numero ${num1} es divisible por 7`)  
            }
        }
    }
    }