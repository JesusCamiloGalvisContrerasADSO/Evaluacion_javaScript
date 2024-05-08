import { validarTarjeta } from "./ejercicio1_modulo.js";

alert("Validando la tarjeta de crédito");

while (true) {
  
  let numTarjeta = prompt(
    "Ingrese el número de la tarjeta, por ejemplo: 1234.4556.3321"
  );
  // let fechaTarjeta = prompt("ingrese la fecha de la tarjeta");
  
  let resultadoValidacion = validarTarjeta(numTarjeta);
  
  if (resultadoValidacion) {
    alert(`La tarjeta es de marca ${resultadoValidacion.marca}`);
    break;
  } else {
    alert("La tarjeta no corresponde a ninguna en la base de datos, vuelva a intentar");
    continue;
  }
}
