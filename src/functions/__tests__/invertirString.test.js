import invertirString from "../invertirString";

test("Should return undefined if argument different string", () => {
  const resp = invertirString(133);
  // expect(resp).toBe(undefined);
  expect(resp).toBeUndefined(); // Asercion
});

test("Should return empty string", () => {
  const resp = invertirString("");
  expect(resp).toBe(""); // Asercion
});
