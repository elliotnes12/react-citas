
import './App.css'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'
import { useEffect, useState } from 'react';

function App() {

  const [pacientes,setPacientes] = useState([])
  const [paciente,setPaciente] = useState({})


  useEffect(() =>{

    const obtenerLS = () =>{
       if(localStorage.getItem("pacientes") != undefined){
         let pacientesLocal =JSON.parse(localStorage.getItem("pacientes"))
         setPacientes(pacientesLocal)
        }
      
    }

    obtenerLS()

  },[])

  useEffect(() =>{

    localStorage.setItem("pacientes",JSON.stringify(pacientes));

  },[pacientes])

  const eliminarPaciente = (id) =>
  {
    const clonePacientes = pacientes.filter((element) => element.id !== id);
    setPacientes(clonePacientes)
  }
  
  return (
    <div className='container mx-auto mt-20'>
      <Header></Header>
      <div className='flex flex-col md:flex-row mt-12'>
        <Formulario paciente={paciente} setPaciente={setPaciente} pacientes={pacientes} setPacientes={setPacientes} />
        <ListadoPacientes setPaciente={setPaciente} pacientes={pacientes} eliminarPaciente={eliminarPaciente} />
      </div>
    </div>
  )
}

export default App
