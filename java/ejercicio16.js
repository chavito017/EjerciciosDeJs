// Obtener el radio de la esfera
let radio = prompt("Ingresa el radio de la esfera:");

// Calcular el volumen de la esfera
let volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);

// Mostrar el resultado en la consola y en una alerta
console.log("El volumen de la esfera es: " + volumen.toFixed(2));
alert("El volumen de la esfera es: " + volumen.toFixed(2));