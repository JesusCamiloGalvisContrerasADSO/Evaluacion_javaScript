export const operaciones = (cantNumeros) => {
  let numero = 0;
  let numeros = [];
  for (let i = 1; i <= cantNumeros; i++) {
    numero = parseFloat(prompt(`ingrese el numero ${i}`));
    numeros.push(numero);
  }
  console.log(numeros);

  // const operacion = () => {
  //   let numeros = [];
  //   if (numeros.length > 0) {
  //     let max = Math.max(...numeros);
  //     alert(`el numero mayor es ${max}`);
  //   } else {
  //     alert(`no hay numero ingresados`);
  //   }
  // };

  let operacion = parseInt(
    prompt(`que operacion desea realizar
  1: sumar numeros
  2: contar los numeros primos
  3: contar los numeros pares
  4: calcular el promedio de numeros primos
  5: calcular el promedio de numeros pares`)
  );
  

  switch (operacion) {
    case 1:
      let suma = 0;
      for (const element of numeros) {
        suma = suma + element;
      }
      alert(`la suma de los numeros es ${suma}`);
      
      break;

    case 2:
      let contador = 0;

      for (const num of numeros) {
        let esPrimo = true;

        if (num <= 1) {
          esPrimo = false;
        } else {
          for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
              esPrimo = false;
              break;
            }
          }
        }

        if (esPrimo) {
          contador++;
        }
      }

      alert(`el total de numeros primos es de ${contador}`);

      break;

    case 3:
      let pares = 0;
      for (const element of numeros) {
        if (element % 2 == 0) {
          pares++;
        }
      }
      alert(`hay ${pares} numeros pares`);

      break;

    case 4:
      let contador1 =0
      let sumaPrimos = 0; 
      for (const num of numeros) {
        let esPrimo = true; 
      
        if (num <= 1) {
          esPrimo = false; 
        } else {
          for (let i = 2; i <= Math.sqrt(num); i++) {// Itera desde 2 hasta la raíz cuadrada del número
            if (num % i === 0) {// Verifica si el número es divisible por algún número entre 2 y su raíz cuadrada
              esPrimo = false; // Si es divisible, no es primo
              break; // Sale del bucle porque ya no es necesario comprobar más divisores
            }
          }
        }
      
        if (esPrimo) {
          contador1++; // Incrementa el contador de números primos
          sumaPrimos += num; // Agrega el número a la suma de los números primos
        }
      }

      let promedio = sumaPrimos / contador1; // Calcula el promedio de los números primos
      console.log('holaaaaaaaaaaaaaaaaa')
        alert(`El promedio de los números primos es: ${promedio}`);

            alert(`el promedio de numeros primos es ${promedio}`);
      break;

    case 5:
      let par = 0;
      let paressuma = 0;
      for (const element of numeros) {
        if (element % 2 == 0) {
          par++;
          paressuma += element;
        }
      }
      promedioPar = paressuma / par;
      alert(`el promedio de los numeros pares es de ${promedioPar}`);
      break;
  }
};
