export default function esImpar(number) {
  if (!number) {
    return "debes ingresar un valor";
  }
  if (typeof number !== "number") {
    return "Debes ingresar un valor que sea del tipo numérico";
  }
  return number % 2 !== 0;
}
