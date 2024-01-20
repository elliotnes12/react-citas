import { useState, useEffect } from 'react';
import MessageError from './MessageError';

// eslint-disable-next-line react/prop-types
function Formulario({ paciente, pacientes, setPacientes, setPaciente }) {


  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [alta, setAlta] = useState('')
  const [sintomas, setSintomas] = useState('')
  const [estado, setEstado] = useState(false)
  const [id, setId] = useState('')
  const [btn, setBtn] = useState('Agregar paciente')



  useEffect(() => {


    if (Object.keys(paciente).length > 0) {

      setBtn('Editar paciente')

      const { nombre, propietario, alta, email, sintomas, id } = paciente;

      setNombre(nombre)
      setPropietario(propietario)
      setAlta(alta)
      setEmail(email)
      setSintomas(sintomas)
      setId(id)

    }

  }, [paciente])


  const handleSubmit = (e) => {

    e.preventDefault();

    if ([nombre, propietario, email, alta, sintomas].includes('')) {
      setEstado(true)
      return;
    }

    if (paciente.id) {
      
      const whatIsIndex = (element) => element.id == paciente.id;
      const index = pacientes.findIndex(whatIsIndex);

      const objetoPaciente = {
        nombre,
        propietario,
        email,
        alta,
        sintomas,
        id
      };

      const clonePacientes = pacientes.with(index,objetoPaciente)

      setPacientes(clonePacientes)
      setPaciente([])
      setBtn("Agregar paciente")
      cleanForm()

      console.log("entro al cargar")

    } else {

      createPaciente();
    }

  }

  const createPaciente = () => {

    const objetoPaciente = {
      nombre, propietario, email, alta, sintomas, id: generarId()
    }

    console.log("entro al cargar")
    setPacientes([...pacientes, objetoPaciente])
    cleanForm()
  }

  const cleanForm = () =>{
    setEstado(false)
    setNombre('')
    setPropietario('')
    setEmail('')
    setAlta('')
    setSintomas('')
    setId('')
  }
  const generarId = () => {
    return 'nnnnnnnnnnnnnnnnnnnnnnnnnnnnn-nnnn-7nnn-tnnn-nnnnnnnnnnnn'.replace(/[nt]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'n' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  return (
    <div className="md:w-1/2">
      <div className="font-black text-2xl text-center">Seguimiento</div>
      <p className="mt-4 text-xl">Añade pacientes y <span className="text-indigo-600 font-bold inline">administralos</span></p>


      {estado &&
        <MessageError message={"Todos los campos son obligatorio"} />
      }


      <form onSubmit={handleSubmit} className="bg-white md:shadow-md mt-5 rounded-md p-5">
        <div className="flex flex-col text-left font-bold">
          <label htmlFor="mascota" className="md:mr-5 mb-2 text-gray-700 uppercase">
            Nombre Mascota
          </label>
          <input
            id="mascota"
            className="border-2 w-full p-2 placeholder-gray-300 rounded-md"
            type="text" value={nombre} onChange={(e) => {
              setNombre(e.target.value)
            }} placeholder="Nombre de la mascota" />
        </div>

        <div className="flex flex-col text-left font-bold">
          <label htmlFor="propietario" className="md:mr-5 mb-2 text-gray-700 uppercase">
            Nombre Propietario
          </label>
          <input
            id="propietario" value={propietario}
            onChange={(e) => {
              setPropietario(e.target.value)
            }}
            className="border-2 w-full p-2 placeholder-gray-300 rounded-md"
            type="text" placeholder="Nombre del propietario" />
        </div>

        <div className="flex flex-col text-left font-bold">
          <label htmlFor="email" className="md:mr-5 mb-2 text-gray-700 uppercase">
            Email
          </label>
          <input
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className="border-2 w-full p-2 placeholder-gray-300 rounded-md"
            type="email" placeholder="Email" />
        </div>

        <div className="flex flex-col text-left font-bold">
          <label htmlFor="alta" className="md:mr-5 mb-2 text-gray-700 uppercase">
            Alta
          </label>
          <input
            id="alta"
            value={alta}
            onChange={(e) => {
              setAlta(e.target.value)
            }}
            className="border-2 w-full p-2 placeholder-gray-300 rounded-md"
            type="date" />
        </div>


        <div className="flex flex-col text-left font-bold">
          <label htmlFor="sintomas" className="md:mr-5 mb-2 text-gray-700 uppercase">
            Sintomas
          </label>
          <textarea
            value={sintomas}
            onChange={(e) => {
              setSintomas(e.target.value)
            }}
            className="border-2 w-full p-2 placeholder-gray-300 rounded-md" id="sintomas"
            placeholder="sintomas" />
        </div>


        <div className="m-5">
          <input type="submit" className="bg-indigo-600 w-full p-3 rounded-md text-white uppercase font-bold 
          hover:bg-indigo-700 cursor-pointer transition-all" value={btn} />
        </div>
      </form>
    </div>

  )
}

export default Formulario