// eslint-disable-next-line react/prop-types
function Paciente({paciente,setPaciente,eliminarPaciente}){


    const {nombre,propietario,email,alta,sintomas,id} = paciente;

    const handleEliminarPaciente = () =>{
        const eliminar = confirm("Deseas eliminar el paciente");
        if(eliminar){
          eliminarPaciente(id)
        }
    }

    return(
        <div className="text-left m-3 p-5 bg-white shadow-md rounded-xl">
               
               <p className="font-bold mb-2 text-gray-700 uppercase">
                 id: {''}
                 <span className="normal-case font-normal">{id}</span>
               </p>
               <p className="font-bold mb-2 text-gray-700 uppercase">
                 Nombre: {''}
                 <span className="normal-case font-normal">{nombre}</span>
               </p>
               <p className="font-bold mb-2 text-gray-700 uppercase">
                 Propietario: {''}
                 <span className="normal-case font-normal">{propietario}</span>
               </p>
               <p className="font-bold mb-2 text-gray-700 uppercase">
                 Email: {''}
                 <span className="normal-case font-normal">{email}</span>
               </p>
               <p className="font-bold mb-3 text-gray-700 uppercase">
                 Fecha Alta: {''}
                 <span className="normal-case font-normal">{alta}</span>
               </p>
               <p className="font-bold mb-3 text-gray-700 uppercase">
                 Sintomas: {''}
                 <span className="normal-case font-normal">{sintomas}</span>
               </p>

                <div>
                  <button
                   type="button"
                   className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white text-center uppercase rounded-sm"
                   onClick={() =>{
                      setPaciente(paciente)
                   }}
                 >
                  Editar
                  </button>

                  <button
                   type="button"
                   className="py-2 ml-3 px-10 bg-red-600 hover:bg-red-700 text-white text-center uppercase rounded-sm"
                   onClick={handleEliminarPaciente}
                  >
                  Eliminar
                  </button>
                </div>
            </div>
    )
} 

export default Paciente;