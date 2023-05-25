import React from "react";
import "./Select.css";

const Select = ({
  keyText,
  name,
  initialValue,
  setChange,
  label,
  data,
  keyValue

}) => {
 

  return (
    <div className="form-select">
      <label className="label">{label}</label>
      <select name={name} className="select" onChange={(e) => {setChange(e.target.value);}}>
        <option>{initialValue}</option>
        {data && data.map((x) => (
            <option key={x[ `${keyValue}` ]} value={x[ `${keyValue}` ]}>
              {x[ `${keyText}` ]}
            </option>
          ))}

      </select>
    </div>
  );
};
export default Select;
