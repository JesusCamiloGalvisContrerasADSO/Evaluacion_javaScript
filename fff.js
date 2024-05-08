
// con esto creamos un proceso de intervalos que pare en cierto numero

let tiempo = 1000;
let contador = 0;

let temporizador = setInterval(() => {
  let date = new Date().toLocaleTimeString();
  console.log(`la hora actual es: ${date}`)
  if (contador >= 10) {
    clearInterval(temporizador)
  }
  contador++;
}, tiempo);
