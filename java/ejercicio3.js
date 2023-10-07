function fibonacciPares(n) {
    let a = 0, b = 1;
    let contador = 0;
    
    while (contador < n) {
      if (a % 2 === 0) {
        console.log(a);
        contador++;
      }
      let temp = a;
      a = b;
      b = temp + b;
    }
  }
  
  fibonacciPares(10);
  
  
  