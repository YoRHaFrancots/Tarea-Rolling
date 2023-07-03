
let numero = parseInt(prompt("Ingresa un número:"));


let resultados = "El número " + numero + " es divisible por: ";


if (numero % 2 === 0) {
  resultados += "2, ";
}

if (numero % 3 === 0) {
  resultados += "3, ";
}

if (numero % 5 === 0) {
  resultados += "5, ";
}

if (numero % 7 === 0) {
  resultados += "7, ";
}


resultados = resultados.slice(0, -2);


document.write(resultados)

