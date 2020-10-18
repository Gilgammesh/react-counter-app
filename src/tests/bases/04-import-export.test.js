import "@testing-library/jest-dom";
import { getHeroeById, getHeroeByOwner } from "../../bases/04-import-export";
import dataHeroe from "../../data/heroes";

describe("Pruebas unitarias de 04-import-export.js", () => {
  /************************************************************************************/
  test(`Se debe retornar un heroe por su id`, () => {
    const id = 1;

    const heroe = getHeroeById(id);

    const heroeTest = dataHeroe.find((ele) => ele.id === id);

    expect(heroe).toEqual(heroeTest);
  });
  /************************************************************************************/
  test(`Se debe retornar undefined si el id no existe`, () => {
    const id = 10;

    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });
  /************************************************************************************/
  test(`Se debe retornar un arreglo de heroes de DC`, () => {
    const owner = "DC";

    const heroes = getHeroeByOwner(owner);

    const heroesTest = dataHeroe.filter((ele) => ele.owner === owner);

    expect(heroes).toEqual(heroesTest);
  });
  /************************************************************************************/
  test(`Se debe retornar un arreglo de 2 heroes de Marvel`, () => {
    const owner = "Marvel";

    const heroes = getHeroeByOwner(owner);
    const size = heroes.length;

    expect(size).toBe(2);
  });
});
