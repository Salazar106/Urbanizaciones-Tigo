import React from "react";

const EditImput = ({ setChange, name, label,type,value }) => {
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
      <input  className="miniInput" value={value} style={Styles.input} name={name} type={type} onChange={(e) => {setChange(e.target.value);}}/>
    </div>
  );
};
export default EditImput;