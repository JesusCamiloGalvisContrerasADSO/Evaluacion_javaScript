export const validarTarjeta = (numTarjeta) => {
  let parametro_Visa = /^4\d{3}[.]\d{4}[.]\d{4}[.]\d{4}/;
  let parametro_American = /^[34|35|36|37]\d{3}[.]\d{4}[.]\d{4}[.]\d{3}/; //15 dígitos y empieza por (34 – 37)
  let parametro_mastercard = /^[51|52|53|54|55]\d{3}[.]\d{4}[.]\d{4}[.]\d{4}/; // tiene 16 dígitos y empieza por (51 – 55)
  let parametro_Diners = /^[300|301|302|303|304|305|36|37|38)]\d{3}[.]\d{4}[.]\d{4}[.]\d{2}/;//tiene 14 dígitos y empieza por (300 – 305 o 36 - 38)
  let parametro_Discover = /^6011\.\d{4}\.\d{4}\.\d{4}/; //tiene 16 dígitos y empieza por (6011)

  let ciclo = true;
    if (parametro_Visa.test(numTarjeta)) {
      return { marca: "Visa" };
    } else if (parametro_mastercard.test(numTarjeta)) {
      return { marca: "Mastercard" };
    } else if (parametro_American.test(numTarjeta)) {
      return { marca: "American Express" };
    } else if (parametro_Diners.test(numTarjeta)) {
      return { marca: "Diners Club:" };
    } else if (parametro_Discover.test(numTarjeta)) {
      return { marca: "Discover" };
    } else {
      let ciclo = false;
      return null;
  }
};
