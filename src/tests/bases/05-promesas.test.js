import "@testing-library/jest-dom";
import { getHeroeByIdAsync } from "../../bases/05-promesas";
import dataHeroe from "../../data/heroes";

describe("Pruebas unitarias de 05-promesas.js", () => {
  /************************************************************************************/
  test(`Debe retornar un heroe de forma asincróna`, (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(dataHeroe[0]);
      done();
    });
  });
  /************************************************************************************/
  test(`Debe retornar erro si el héroe no existe`, (done) => {
    const id = 10;

    getHeroeByIdAsync(id).catch((err) => {
      expect(err).toBe("No se pudo encontrar el heroe");
      done();
    });
  });
});
