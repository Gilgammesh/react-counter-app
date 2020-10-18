import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import PrimeraApp from "../PrimeraApp";

describe("Pruebas en el componente PrimeraApp.js", () => {
  /************************************************************************************/
  /* test("se debe mostrar el saludo 'Hola mundo'", () => {
    const saludo = "Hola mundo";

    const { getByText } = render(<PrimeraApp saludo={saludo} />);

    expect(getByText(saludo)).toBeInTheDocument();
  }); */
  /************************************************************************************/
  test("se debe mostrar <PrimeraApp /> correctamente", () => {
    const saludo = "Hola mundo";

    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });
  /************************************************************************************/
  test("se debe mostrar el subtitulo enviado en props", () => {
    const saludo = "Hola mundo";
    const subtitulo = "Este es el subtitulo de test";

    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subtitulo} />
    );

    const textParrafo = wrapper.find("p").text();

    expect(textParrafo).toBe(subtitulo);
  });
});
