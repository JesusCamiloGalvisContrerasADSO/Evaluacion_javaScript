//  Diseñar un programa que me permita ingresar n cantidad de palabras por
// teclado, al finalizar la carga, se debe enviar como a una función expresada
// como único parámetro rest donde nos responderá cual de las palabras
// ingresadas es mayor a todas las anteriores.


function encontrarMayor(...palabras) {
  let palabraM = "";
  for (let palabra of palabras) {
    if (palabra.length > palabraM.length) {
      palabraM = palabra;
    }
  }
  return palabraM;
}


function main() {
  let palabras = [];
  let palabra = prompt("Ingresa una palabra (o 'fin' para terminar):");
  while (palabra !== "fin") {
    palabras.push(palabra);
    palabra = prompt("Ingresa otra palabra (o 'fin' para terminar):");
  }

  let palabraLarga = encontrarMayor(...palabras);
  console.log("La palabra más larga ingresada es:", palabraLarga);
}

main();
