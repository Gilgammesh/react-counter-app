import "@testing-library/jest-dom";
import { retornaArreglo } from "../../bases/03-desestruc-array";

describe("Pruebas unitarias de 03-desestruc-array.js", () => {
  /************************************************************************************/
  test(`retornaArreglo debe retornar un string y un número`, () => {
    const arrayTest = ["ABC", 123];
    const [letra, numero] = retornaArreglo();

    expect(letra).toBe(arrayTest[0]);
    expect(typeof letra).toBe("string");

    expect(numero).toBe(arrayTest[1]);
    expect(typeof numero).toBe("number");
  });
});
