import React from 'react'
import InputLarge from '../pure/InputLarge';
import './UpdateUr.css'
import EditImput from '../pure/Editimput';
import Select from '../pure/Select';

const UpdateUr=()=>{
    const data = [
        {
          id: 1,
          nombre: "Las Flores",
          tipo: "Urbanizacion",
          direccion: "CL 23D sur # 34 - 23",
        },
        {
          id: 1,
          nombre: "Las Floresitas",
          tipo: "Urbanizacion",
          direccion: "CL 23D sur # 34 - 44",
        },
        {
          id: 1,
          nombre: "Las Florondas",
          tipo: "Urbanizacion",
          direccion: "CL 23D sur # 24 - 50",
        },
      ];
    return(
        <>
        <h1>Actualizar Urbanizacion</h1>
        <div className="container">

            <div className="tittles">
                <h3>Regional: Andina</h3>
                <h3>Departamento: Antioquia</h3>
                <h3>Ciudad: Medellin</h3>
            </div>

            <div className="inputs">
                <EditImput name={'nombreUR'} label={'Nombre Urbanizacion'} value={data[0].nombre}/>
                <EditImput name={'direccion'} label={'Direccion'} value={data[0].direccion}/>
                <InputLarge name={"barrio"} label={'Barrio'} type={'text'} setChange={''}/>
                <Select label={"Tipo de Unidad recidencial"}initialValue={"Urbanizacion"}name={"TUnidadRecidencial"} />

            </div>
            
            <div className="btn-container">
            <button className='btn-mine'>Editar</button>
            </div>
        </div>
        </>
    )
}
export default UpdateUr;




// <Select name={'Complemento'} data={complement} initialValue={"Selec. Complemento"} label={"Complemento"} setChange={getComplemento}/>

// <MiniInput label={"Numero"} type={"number"} setChange={getNumComplement}/>

// {(complemento === "Bloque" || complemento === "Torre") && (
//   <>
//     <Select name=""data={complement2}initialValue={"Selec. Complemento"}label={"Complemento"}setChange={getComplemento2}/>
//     <MiniInput label={"Numero"}type={"number"}setChange={getNumComplement2}/>
//   </>
// )}

// <div className="Adress">
//   <Select
//     label={"Tipo de Unidad recidencial"}
//     initialValue={"Selec. tipo unidad recidencial"}
//     name={"Inmueble"}
//     data={tiposInmuebles}
//     setChange={getInmueble}
//   />
//   <InputLarge
//     name={"NombreConjunto"}
//     label={"Nombre Unidad recidencial"}
//     setChange={getNombreInmueble}
//   />
// </div>
