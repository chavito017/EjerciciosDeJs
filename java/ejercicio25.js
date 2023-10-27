// Obtener el número para encontrar sus múltiplos
let numero = prompt("Ingresa un númerito:");

// Emitir los múltiplos del número dado hasta 10
console.log("Los múltiplos de " + numero + " son:");
alert("Los múltiplos de " + numero + " son:");

for (let i = 1; i <= 10; i++) {
  let multiplo = numero * i;
  console.log(multiplo);
  alert(multiplo);
}