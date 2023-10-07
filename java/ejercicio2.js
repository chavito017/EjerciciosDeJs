function calcularMCM(num1, num2) {
  let mcm = 0;
  let max = Math.max(num1, num2);

  while (true) {
    if (max % num1 === 0 && max % num2 === 0) {
      mcm = max;
      break;
    }
    max++;
  }

  console.log("El (MCM) de", num1, "y", num2, "es:", mcm);
  alert("El (MCM) de " + num1 + " y " + num2 + " es: " + mcm);
}

let numero1 = prompt("Ingresa el primer número:");
let numero2 = prompt("Ingresa el segundo número:");

calcularMCM(Number(numero1), Number(numero2));