import React from "react";

const MiniInput = ({ nombrecito }) => {
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
    <div className="form-miniSelect">
      <label className="label">{nombrecito}</label>
      <input  className="miniInput" style={Styles.input} type="number" />
    </div>
  );
};
export default MiniInput;