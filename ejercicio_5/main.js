import { Calculadora } from "./calculadora.js";

const calculadora = new Calculadora();

// Función para solicitar un número al usuario
const solicitarNumero = (mensaje) => {
  let a;
  do {
    a = prompt(mensaje);
    if (!a || isNaN(a)) {
      alert("Por favor, ingrese un número válido.");
    }
  } while (!a || isNaN(a));
  return parseFloat(a);
};

try {
  let num1 = solicitarNumero("Ingrese el primer número:");
  let num2 = solicitarNumero("Ingrese el segundo número:");

  const suma = calculadora.suma(num1, num2);
  console.log(`La suma es: ${suma}`);

  const resta = calculadora.resta(num1, num2);
  console.log(`La resta es: ${resta}`);

  const multiplicacion = calculadora.multiplicacion(num1, num2);
  console.log(`La multiplicación es: ${multiplicacion}`);

  const division = calculadora.division(num1, num2);
  console.log(`La división es: ${division}`);
} catch (error) {
  console.error(`Error: ${error.message}`);
}
