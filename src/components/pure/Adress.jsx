import React, { useEffect, useState } from "react";
import Select from "./Select";
import "./Adress.css";
import "./SmallSelect.css";
import MiniInput from "./InputNumber";
import InputLarge from "./InputLarge";
import Swal from "sweetalert2";
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";


const Adress = () => {
  const [regional, setRegional] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [tvias, setTvias] = useState("");
  const [N1, setNumero1] = useState("");
  const [N2, setNumero2] = useState("");
  const [N3, setNumero3] = useState("");
  const [inmueble, setInmueble] = useState("");
  const [TipoUniRecidencial, setTipoUniRecidencial] = useState([]);
  const [nombreInmueble, setNombreInmueble] = useState("");
  const [regionales,setRegionales]=useState([])
  const [departamentos,setDepartamentos]=useState([])
  const [ciudades, setCiudades] = useState([]);
  const [barrio, setBarrio]=useState('')


  const tipoVias = [
    {tvia:"AV"},
    {tvia:"CL"},
    {tvia:"CR"},
    {tvia:"Circular"},
    {tvia:"DIAG"},
    {tvia:"MZ"},
    {tvia:"Kilometro"},
    {tvia:"Via"}
    
  ];

  
  // const ciudades=['Medellin','Bogota','Cali','Choco','Pereira']

  const alertSend = (title, icon, iconColor) => {
    Swal.fire({
      position: "center",
      iconColor: iconColor,
      icon: icon,
      title: title,
      showConfirmButton: true,
      confirmButtonText: "OK",
      confirmButtonColor: "",
      timer:'',
    });
  };
  const getTipoVia = (tipoVia) => {
    setTvias(tipoVia);
  };
  const getNumero1 = (N1) => {
    setNumero1(N1);
  };
  const getNumero2 = (N2) => {
    setNumero2(N2);
  };
  const getNumero3 = (N2) => {
    setNumero3(N2);
  };
  const getInmueble = (x) => {
    setInmueble(x);
  };
  const getNombreInmueble = (x) => {
    setNombreInmueble(x);
  };
  const getRegional=(x)=>{


    setDepartamentos(null)
    setRegional(x)
    
    axios.get(`https://test-gestion.amstigo.com.co/urbanizaciones/departamento/${x}`).then(res=>{
        setDepartamentos(res.data)
    })

  };
  const getDepartamento=(x)=>{
   
    setDepartamento(x)
    const formData={
        Id_Regional:regional,
        Departamento_Dane:x
    }

    axios.post('https://test-gestion.amstigo.com.co/urbanizaciones/ciudad',formData).then(res=>{
      setCiudades(res.data)
      
    })
    
  };
  const getCiudad=(x)=>{
    setCiudad(x)
  };
  
  const getBarrio =(x)=>{
    setBarrio(x)
  }
  

  
  const handleClick = () => {
   
    const formData={
      nombre_ur:nombreInmueble,
      id_tipo_unidad:TipoUniRecidencial,
      direccion_ur:tvias + " " + N1 + " # " + N2 + " - " + N3,
      barrio:barrio,
      id_municipio:ciudad
    }

    // axios.post('https://test-gestion.amstigo.com.co/urbanizaciones/guardarUnidadResidencial',formData).then(res=>{
    //   if(res.data){
    //     alertSend("se guardaron los datos exitosamente",'success','#00c8fa')
    //   }else{

    //   }
    // })

    alertSend((nombreInmueble+'  //  '+ inmueble + '  //  ' + ciudad + '  //  '+ formData.direccion_ur + "  //  "+ barrio),'success','#00c8fa')
  };

  useEffect( () => {
    axios.get('https://test-gestion.amstigo.com.co/urbanizaciones/tipoUnidad').then(resp=>{
      setTipoUniRecidencial(resp.data)
    })

    axios.get("https://test-gestion.amstigo.com.co/urbanizaciones/regional").then(res=>{
      setRegionales(res.data)

    })
  },[] )


  return (
    <div className="">
      <h1>Crear Urbanizaciones</h1>

      <div className="container">
          <div className="Adress">
        <Select label={"Regional"} data={regionales}initialValue={'Selec. Regional'} name={"regional"} keyValue={'ID'} keyText={'Regional'} setChange={getRegional} />
        <Select label={"Departamento"} data={departamentos} initialValue={'Selec. Departamento'} name={"departamento"} keyValue={'Departamento_Dane'} keyText={'Departamento_Dane'} setChange={getDepartamento} />
        <Select label={"Ciudad"} data={ciudades} initialValue={'Selec. Ciudad'} name={"ciudad"} keyValue={'id'} keyText={'Ciudad'} setChange={getCiudad} />

        <Select
            label={"Tipo de Unidad recidencial"}
            initialValue={"Selec. tipo unidad recidencial"}
            name={"Inmueble"}
            data={TipoUniRecidencial}
            keyValue={'id'}
            keyText={'tipo_unidad'}
            setChange={getInmueble}
          />
          <InputLarge
            name={"NombreConjunto"}
            label={"Nombre Unidad recidencial"}
            setChange={getNombreInmueble}
          />
      </div>

      <div className="Adress">
        <Select
          label={"Tipo de via"}
          data={tipoVias}
          keyValue={"tvia"}
          keyText={"tvia"}
          name={"tipoVia"}
          initialValue={"Seleccione Tipo de via"}
          setChange={getTipoVia}
        />
        <InputLarge label={"Numero"} setChange={getNumero1} />
        <h2>#</h2>
        <InputLarge label={"Numero"} setChange={getNumero2} />
        <h2>-</h2>
        <InputLarge name={"Numero"} label={"Numero"} type={"number"} setChange={getNumero3} />
        <InputLarge name={"barrio"} label={'Barrio'} type={'text'} setChange={getBarrio}/>
    

        <div className="Adress">
          
        </div>
      </div>
      <div className="btn-container">
        <button className="btn-mine" onClick={handleClick}>
          Guardar
        </button>
      </div>
      </div>
      
    </div>
  );
};

export default Adress;
