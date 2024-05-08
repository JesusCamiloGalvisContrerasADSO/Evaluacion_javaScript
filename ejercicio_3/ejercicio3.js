// Diseñar un programa que me solicite por teclado n cantidad de números, al
// finalizar la carga de los números el programa debe enviar los números a
// una función expresada como único parámetro rest donde serán ordenados
// de mayor a menor para luego mostrarlos en una tabla por consola.

const ordenarNumeros = (...numeros) => {
  numeros.sort((a, b) => b - a);
  return numeros;
}

const operacion = () => {
  let num = parseInt(
    prompt("ingrese la cantidad de numeros que desea ingresar")
  );
  let numeros = [];

  for (let i = 1; i <= num; i++) {
    let numero = parseInt(prompt(`ingrese el numero ${i}`));
    numeros.push(numero);
  }
  numeros = ordenarNumeros(...numeros)
  alert('revisa la consola');
  console.table(numeros);
  for (const element of numeros) {
    alert(`el orden es ${element}`)
  }

};

operacion();




