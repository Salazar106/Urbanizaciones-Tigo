import React, { useState } from "react";
import './Select.css'

const Select = ({nombrecito,n1,n2,n3,n4,n5}) => {
  const [values, setValues] = useState("");
  function handleChange(event) {
    setValues(event.target.value);
    console.log(values);
  }

  return (
    <div className="form-select">
      <label className="label">{nombrecito}</label>
      <select className="select" onChange={handleChange}>
        <option>Selecione  {nombrecito}</option>
        <option>{n1}</option>
        <option>{n2}</option>
        <option>{n3}</option>
        <option>{n4}</option>
      </select>
    </div>
  );
};
export default Select;
