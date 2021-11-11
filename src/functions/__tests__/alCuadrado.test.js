import alCuadrado from "../alCuadrado";

describe("Tests on alCuadrado Function", () => {
  //ingresa un valor numérico y debería ingresar el cuadrado del mismo
  test("Should return squared number", () => {
    const resp = alCuadrado(5);
    expect(resp).toBe(25);
  });

  test("Should return squared number 2", () => {
    const resp = alCuadrado("6");
    expect(resp).toBe(36);
  });

  // Si ingreso un valor de tipo String, deberpia recibir undefined
  test("Should return undefined", () => {
    const resp = alCuadrado("Soy String");
    expect(resp).toBeUndefined();
  });

  //No ingreso un valor, recibo undefined
  test("Should be Undefined if no param", () => {
    const resp = alCuadrado();
    expect(resp).toBeUndefined();
  });
});
