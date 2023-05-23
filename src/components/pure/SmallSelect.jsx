import React, { useState } from "react";
import './SmallSelect.css'

const SmallSelect = ({nombrecito,n1,n2,n3,n4,n5}) => {
  const [values, setValues] = useState("");
  function handleChange(event) {
    setValues(event.target.value);
    console.log(values);
  }

  return (
    <div className="form-miniSelect">
      <label className="label">{nombrecito}</label>
      <select className="miniSelect" onChange={handleChange}>
        <option></option>
        <option>{n1}</option>
        <option>{n2}</option>
        <option>{n3}</option>
        <option>{n4}</option>
      </select>
    </div>
  );
};
export default SmallSelect;
