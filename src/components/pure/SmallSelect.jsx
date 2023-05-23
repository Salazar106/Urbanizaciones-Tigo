import React from "react";
import './SmallSelect.css'

const SmallSelect = ({ name,
  initialValue,
  keyValue,
  keyText,
  setChange,
  data,
  label
 }) => {
  

  return (
    <div className="form-miniSelect">
      <label className="label">{label}</label>
      <select name={name} className="select" onChange={(e) => {setChange(e.target.value);}}>
        <option>{initialValue}</option>
        {data && data.map((x,index) => (
            <option key={x} value={x}>
              {x}
            </option>
          ))}

      </select>
    </div>
  );
};
export default SmallSelect;
