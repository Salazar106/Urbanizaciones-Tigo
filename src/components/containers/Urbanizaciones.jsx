import React from "react";
import Select from "../pure/Select";
import "./Urbanizaciones.css";
import Adress from "../pure/Adress";
import LocationSelects from "../pure/LocationSelects";


const Urbanizaciones = () => {
  return (
    <div className="container">
      <h1>Urbanizaciones</h1>
      {/* <div className="card">
        <LocationSelects/>
      </div> */}
      <div className="card">
        <Adress/>
      </div>
      <div className="card">
        
      </div>
    </div>
  );
};

export default Urbanizaciones;
