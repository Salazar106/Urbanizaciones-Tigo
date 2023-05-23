import React from "react";

const InputLarge = ({ setChange, name, label,type }) => {
  const  Styles={
    "input":{
        width:'87%',
        outline:"none", 
        border:'none', 
        marginLeft:'3px', 
        fontSize:'large',
        color:'#7d7d7d'
    }
    }


  return (
    <div className="form-select">
      <label className="label">{label}</label>
      <input  className="miniInput" style={Styles.input} name={name} type={type} onChange={(e) => {setChange(e.target.value);}}/>
    </div>
  );
};
export default InputLarge;