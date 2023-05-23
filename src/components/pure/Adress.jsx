import React from "react";
import Select from "./Select";
import "./Adress.css";
import SmallSelect from "./SmallSelect";
import MiniInput from './InputNumber'
const Adress = () => {
  return (
    <div className="Adress">
      <Select nombrecito={"Tipo de via"} n1={"Carrera"}n2={"Calle"}n3={"Transversal"}n4={"Manzana"}/>
      <MiniInput nombrecito={'Numero'}/>
      <SmallSelect nombrecito={"Prefijo"} n1={"A"} n2={"AA"} n3={"B"} n4={"BB"} />
      <SmallSelect nombrecito={'Orientacion'} n1={'Norte'} n2={'Sur'} n3={'Oriente'} n4={'Occidente'}/>
      <h2>#</h2>
      <MiniInput nombrecito={'Numero'}/>
      <SmallSelect nombrecito={"Prefijo"} n1={"A"} n2={"AA"} n3={"B"} n4={"BB"} />
      <SmallSelect nombrecito={'Orientacion'} n1={'Norte'} n2={'Sur'} n3={'Oriente'} n4={'Occidente'}/>
      <Select nombrecito={'Tipo de Inmueble'} n1={'Casa'} n2={'Bloque'} n3={"Apartamento"} n4={"Interior"}/>
      <MiniInput nombrecito={'Numero'}/>
     
      
    </div>
  );
};

export default Adress;
