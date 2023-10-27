let precio = parseFloat(prompt("Ingrese el valor del producto:"));
        let descuentoDelPrecio = parseFloat(prompt("Ingresa el descuento del producto:"));

        let resultado = (precio * descuentoDelPrecio) / 100;
        let precioConDescuento = precio - resultado;

        console.log(`El precio con descuento es: $${precioConDescuento.toFixed(2)}`);
        alert(`El precio con descuento es: $${precioConDescuento.toFixed(2)}`)