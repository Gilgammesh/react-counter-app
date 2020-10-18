describe("Pruebas en el archivo demo.test.js", () => {
  test("los string deben ser iguales", () => {
    // 1. inicialización
    const string1 = "Hola Mundo";

    // 2. estímulo
    const string2 = "Hola Mundo";

    // 3. observar el comportamiento
    expect(string1).toBe(string2);
  });
});
