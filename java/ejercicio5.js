// Pedir al usuario dos números
var numero1 = prompt("Ingrese el primer número");
var numero2 = prompt("Ingrese el segundo número");

// Convertir los valores ingresados a números
numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

// Verificar si el primer número es múltiplo del segundo
if (numero1 % numero2 === 0) {
  console.log(numero1 + " es múltiplo de " + numero2);
  alert(numero1 + " es múltiplo de " + numero2);
} else {
  console.log(numero1 + " no es múltiplo de " + numero2);
  alert(numero1 + " no es múltiplo de " + numero2);
}

