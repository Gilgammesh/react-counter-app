import React from "react";
import PropTypes from "prop-types";
//import React, {Fragment} from "react";

const PrimeraApp = ({ saludo }) => {
  //const saludo = "Hola Mundo";

  if (!saludo) {
    throw new Error("El saludo es necesario");
  }

  return (
    <>
      {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
      <h1>{saludo}</h1>
      <p>Mi primera aplicación</p>
    </>
  );
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string,
};

export default PrimeraApp;
