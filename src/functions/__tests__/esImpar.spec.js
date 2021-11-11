// import la funcion que vamos a testear
import esImpar from "../esImpar";

test("Should return an error message", () => {
  const resp = esImpar();
  expect(resp).toBe("debes ingresar un valor");
});

test("Should be false if given number", () => {
  const resp = esImpar(2);
  expect(resp).toBe(false);
  expect(resp).toBeFalsy();
});

test("Should be true if odd number", () => {
  const resp = esImpar(3);
  expect(resp).toBeTruthy();
});

test("Should return error message if not number", () => {
  const resp = esImpar("soyString");
  expect(resp).toBe("Debes ingresar un valor que sea del tipo numérico");
});
