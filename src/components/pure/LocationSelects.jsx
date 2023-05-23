import React from 'react'
import Select from './Select'
import './Adress.css'

const LocationSelects=()=>{

    return(
        <div className="Adress" >
            <Select nombrecito={"Regional"} n1={"Andina"} n2={"Bogota"} n3={"Costa"} n4={"Sur"}/>
            <Select nombrecito={"Departamento"} n1={"Antioquia"} n2={"Cundinamarca"} n3={"Santander"} n4={"Valle"}/>
            <Select nombrecito={"Ciudad"} n1={"Medellin"} n2={"Bogota"} n3={"Pereira"} n4={"Cartagena"}/>
      </div>
    )
}
export default LocationSelects;