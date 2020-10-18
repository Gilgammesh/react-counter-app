import "@testing-library/jest-dom";
import { getImages } from "../../bases/06-async-await";

describe("Pruebas unitarias de 06-async-await.js", () => {
  /************************************************************************************/
  test(`Debe retornar una url de imagen desde la api`, async () => {
    const url = await getImages();
    console.log(url);
    expect(typeof url).toBe("string");
    expect(url.includes("https://")).toBe(true);
  });
});
