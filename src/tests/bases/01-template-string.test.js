import "@testing-library/jest-dom";
import { nombreCompleto, getSaludo } from "../../bases/01-template-string";

describe("Pruebas unitarias de 01-template-string.js", () => {
  /************************************************************************************/
  test(`getSaludo debe retornar: Hola ${nombreCompleto}`, () => {
    const saludo = getSaludo(nombreCompleto);

    expect(saludo).toBe(`Hola ${nombreCompleto}`);
  });
  /************************************************************************************/
  test(`getSaludo debe retornar: Hola Fernando (si no hay argumento)`, () => {
    const saludo = getSaludo();

    expect(saludo).toBe(`Hola Fernando`);
  });
});
