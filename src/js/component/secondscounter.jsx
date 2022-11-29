import React from "react";

const SecondsCounter = (props) => {
  let tiempoString = props.tiempo.toString();
  //console.log(typeof tiempoString);
  let unidades = tiempoString[tiempoString.length - 1];
  let decenas = tiempoString[tiempoString.length - 2];
  let centenas = tiempoString[tiempoString.length - 3];
  let milecimas = tiempoString[tiempoString.length - 4];
  return (
    <div className="container-fluid">
      <div className="row m-2">
        <h1 className="col-12 d-flex justify-content-center">
          Contador de Segundos con React
        </h1>
      </div>
      <div className="row m-4 d-flex justify-content-center">
        <h1 className="col-1 d-flex justify-content-center">
          {milecimas ? milecimas : 0}
        </h1>
        <h1 className="col-1 d-flex justify-content-center">
          {centenas ? centenas : 0}
        </h1>
        <h1 className="col-1 d-flex justify-content-center">
          {decenas ? decenas : 0}
        </h1>
        <h1 className="col-1 d-flex justify-content-center">
          {unidades ? unidades : 0}
        </h1>
      </div>
      <div className="row m-5">
        <h4 className="col-12 d-flex justify-content-center">
          {props.tiempo >= props.limite
            ? <div className="alert alert-danger" role="alert">
            Has llegado al limite !!
          </div>
            : <div className="alert alert-success" role="alert">
            Falta para llegar al limite de {props.limite}
          </div>}
        </h4>
      </div>
    </div>
  );
};

export default SecondsCounter;

/*
 */
