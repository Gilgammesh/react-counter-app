import "@testing-library/jest-dom";
import { getUser, getUsuarioActivo } from "../../bases/02-funciones";

describe("Pruebas unitarias de 02-funciones.js", () => {
  /************************************************************************************/
  test(`getUser debe retornar un objeto`, () => {
    const userTest = {
      id: "UID123",
      user: "Fernando",
    };
    const user = getUser();

    expect(user).toEqual(userTest);
  });
  /************************************************************************************/
  test(`getUsuarioActivo debe retornar un objeto`, () => {
    const nombre = "Fernando";
    const userTest = {
      uid: "ABC567",
      username: nombre,
    };
    const user = getUsuarioActivo(nombre);

    expect(user).toEqual(userTest);
  });
});
