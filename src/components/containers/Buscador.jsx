import React, { useState,useEffect } from "react";
import Select from "../pure/Select";
import InputLarge from "../pure/InputLarge";
import Table from "../pure/Table";
import './Buscador.css'
import axios from "axios";

const Buscador = () => {
  const [regionales, setRegionales]=useState([])
  const [regional, setRegional]=useState('')
  const [departamentos, setDepartamentos] = useState([]);

  const [departamento, setDepartamento] = useState("");
  const [ciudad, setCiudad] = useState("")
  const [ciudades,setCiudades]=useState([])
  const [nombreUrbanizacion, setNombreUrbanizacion] = useState("");
  const [allUrbanizaciones,setAllUrbanizaciones]=useState([])
  

  const style = {
    inputs: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    },
   
  };

  

  const getUrbanizaciones = () => {
    const formData={
      id_municipio:ciudad,
      nombre_ur:nombreUrbanizacion
    }

    axios.post('https://test-gestion.amstigo.com.co/urbanizaciones/consultarUnidadesResidenciales',formData).then(res=>{
      if(res.data==null){
        alert("no se encontraron coincidencias")
      }else{
        setAllUrbanizaciones(res.data)
      }

    })
  };
 

  const getDepartamento = (x) => {
   
    setRegional(x)
    
    axios.get(`https://test-gestion.amstigo.com.co/urbanizaciones/departamento/${x}`).then(res=>{
        setDepartamentos(res.data)
    })

  };
  const getCiudad = (x) => {
    setDepartamento(x)
    const formData={
        Id_Regional:regional,
        Departamento_Dane:x
    }
    axios.post('https://test-gestion.amstigo.com.co/urbanizaciones/ciudad',formData).then(res=>{
      setCiudades(res.data)
    })
  };
  const getNombreUrbanizacion = (x) => {
    setNombreUrbanizacion(x);
  };

  const setGuradarCiudad=(x)=>{
    setCiudad(x)
  }

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

  useEffect( () => {
   
    axios.get("https://test-gestion.amstigo.com.co/urbanizaciones/regional").then(res=>{
      setRegionales(res.data)

    })
  },[] )

  return (
    <div className="">
      <h1>Buscar Urbanizaciones</h1>

      <div className="container">
        <div className="inputs" style={style.inputs}>
          <Select
            label={"Regional"}
            name={"regional"}
            data={regionales}
            keyValue={'ID'} 
            keyText={'Regional'}
            initialValue={"Selec. Regional"}
            setChange={getDepartamento}
          />
          <Select
            label={"Departamento"}
            name={"Departamento"}
            data={departamentos}
            keyValue={'Departamento_Dane'}
            keyText={'Departamento_Dane'}
            initialValue={"Selec. Departamento"}
            setChange={getCiudad}
          />
          <Select
            label={"Ciudad"}
            name={"Cuidad"}
            data={ciudades}
            initialValue={"Selec. Cuidad"}
            keyValue={'id'}
            keyText={'Ciudad'}
            setChange={setGuradarCiudad}
          />
          <InputLarge
            label={"Nombre de la U. Recidencial"}
            name={"unidad-recidencial"}
            setChange={getNombreUrbanizacion}
          />
          <button
            className="btn-mine"
            style={{ marginTop: "33px" }}
            onClick={getUrbanizaciones}
          >
            Buscar
          </button>
        </div>

        <div className="tableContainer">
          <Table data={allUrbanizaciones} />
        </div>
      </div>
    </div>
  );
};

export default Buscador;
