import React, { useState } from "react";
import Select from "./Select";
import "./Adress.css";
import './SmallSelect.css'
import MiniInput from './InputNumber'
import InputLarge from "./InputLarge";
const Adress = () => {

const [direccion,setDireccion]=useState('')
const [tvias,setTvias]=useState('')

const [N1,setNumero1]=useState('')
const [N2,setNumero2]=useState('')
const [N3,setNumero3]=useState('')

const [inmueble, setInmueble]=useState('')
const [complemento, setComplemento]=useState('')
const [numComplemento, setNumComplement]=useState('')
const [complemento2, setComplemento2]=useState('')
const [numComplemento2, setNumComplement2]=useState('')
const [nombreInmueble, setNombreInmueble]=useState('')


  const tipoVias=[
    "AV",
    "CL",
    "CR",
    "Circular",
    "DIAG",
    "TV",
    "MZ",
    "Kilometro",
    'Via'
    
  ]
  
  const tiposInmuebles=[
    "Edificio",
    "Conjunto recidencial",
    "Ciudadela",
    "Conjunto multifamiliar",
    'Condominio',
    'Parcelacion',
    'Sin informacion'
    
  ]
  const complement=[
    'Bloque',
    'Casa',
    'Apartamento',
    'Torre'
  ]
  const complement2=[
    'Apartamento',
    'Interior'
  ]

  const allAdress=new FormData();


  
 const getTipoVia=(tipoVia)=>{
  setTvias(tipoVia)
 }
const getNumero1=(N1)=>{
  setNumero1(N1)
}
const getNumero2=(N2)=>{
  setNumero2(N2)
}
const getNumero3=(N2)=>{
  setNumero3(N2)
}

const getInmueble=(x)=>{
  setInmueble(x)
}
const getComplemento=(x)=>{
  setComplemento(x)
}
const getComplemento2=(x)=>{
  setComplemento2(x)
}
const getNumComplement=(x)=>{
  setNumComplement(x)
}
const getNumComplement2=(x)=>{
  setNumComplement2(x)
}
const getNombreInmueble=(x)=>{
  setNombreInmueble(x)
}




console.log(tvias,N1,'#',N2,"-",N3,complemento,numComplemento,complemento2,numComplemento2,inmueble,nombreInmueble);

// setDireccion(tvias,N1,prefijo1,cuadrant1,'#',N2,prefijo2,cuadrant2,"-",complemento,numComplemento,complemento2,numComplemento2,nombreInmueble)



  return (
    <>
      <div className="Adress">
          <Select  label={'Regional'} name={'regional'} setChange={''}/>
          <Select  label={'Departamento'} name={'departamento'} setChange={''}/>
          <Select  label={'Ciudad'} name={'ciudad'} setChange={''}/>
      </div>
     
     <div className="Adress">

        <Select label={"Tipo de via"} data={tipoVias} keyValue={'tipoVia'} name={'tipoVia'} initialValue={'Seleccione Tipo de via'} setChange={getTipoVia}/>

        
        <InputLarge label={'Numero'} setChange={getNumero1}/>

        <h2>#</h2>

        

        <InputLarge label={'Numero'} setChange={getNumero2}/>


        <h2>-</h2>

        <InputLarge name={'Numero'}label={'Numero'} type={'number'} setChange={getNumero3}/>

        <Select name="" data={complement} initialValue={'Selec. Complemento'} label={'Complemento'} setChange={getComplemento}></Select>

        <MiniInput label={'Numero'} type={'number'} setChange={getNumComplement}/>
        
        {complemento==='Bloque' && <>
        <Select name="" data={complement2} initialValue={'Selec. Complemento'} label={'Complemento'} setChange={getComplemento2}></Select>
        <MiniInput label={'Numero'} type={'number'} setChange={getNumComplement2}/>
        </>
        }

        {complemento==='Torre' && <>
          <Select name="" data={complement2} initialValue={'Selec. Complemento'} label={'Complemento'} setChange={getComplemento2}></Select>
          <MiniInput label={'Numero'} type={'number'} setChange={getNumComplement2}/>
          </>
        }

        
      <div className="Adress">
          <Select label={'Tipo de Unidad recidencial'} initialValue={'Selec. tipo unidad recidencial'} name={'Inmueble'} data={tiposInmuebles} setChange={getInmueble} /> 
          <InputLarge name={"NombreConjunto"} label={'Nombre Unidad recidencial'}  setChange={getNombreInmueble}/>
      </div>
    </div>
    <div className="btn-container">
      <button className="btn">Guardar</button>

    </div>
    </>
   
  );
};

export default Adress;
