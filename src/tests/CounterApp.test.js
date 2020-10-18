import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import CounterApp from "../CounterApp";

describe("Pruebas unitarias en componente CounterApp.js", () => {
  /************************************************************************************/
  test("se debe mostrar <CounterApp /> correctamente", () => {
    const wrapper = shallow(<CounterApp />);

    expect(wrapper).toMatchSnapshot();
  });
  /************************************************************************************/
  test("se debe mostrar el valor por defecto de 100", () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value} />);

    const countText = wrapper.find("h2").text().trim();

    expect(countText).toBe(`${value}`);
  });
  /************************************************************************************/
  test("se debe incrementar el value en 1 con el boton +1", () => {
    const value = 123;
    const wrapper = shallow(<CounterApp value={value} />);

    wrapper.find("button").at(0).simulate("click");

    const countText = wrapper.find("h2").text().trim();

    expect(countText).toBe(`${value + 1}`);
  });
  /************************************************************************************/
  test("se debe decrementar el value en 1 con el boton -1", () => {
    const value = 123;
    const wrapper = shallow(<CounterApp value={value} />);

    wrapper.find("button").at(2).simulate("click");

    const countText = wrapper.find("h2").text().trim();

    expect(countText).toBe(`${value - 1}`);
  });
  /************************************************************************************/
  test("se debe regresar al valor por defecto con el boton Reset", () => {
    const value = 105;
    const wrapper = shallow(<CounterApp value={105} />);

    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(1).simulate("click");
    const countText = wrapper.find("h2").text().trim();

    expect(countText).toBe(`${value}`);
  });
});
