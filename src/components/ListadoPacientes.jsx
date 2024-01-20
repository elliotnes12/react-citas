import Paciente from "./Paciente"

// eslint-disable-next-line react/prop-types
function ListadoPacientes({ setPaciente,pacientes,eliminarPaciente }) {


  return (
    <div className="md:w-1/2 mt-10 md:mt-0 md:h-screen md:overflow-y-auto md:pl-5">
      {
        pacientes && pacientes.length > 0 ?
          (
            <>
              <h2 className="font-black text-center text-3xl">Listado de Pacientes</h2>
              <p className="text-xl mt-5 mb-3">
                Administra tus {''}
                <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
              </p>
              {
                pacientes.map((paciente) => (
                  <Paciente eliminarPaciente={eliminarPaciente} key={paciente.id} setPaciente={setPaciente} paciente={paciente} />
                ))
              }
            </>
          ) :
          (
            <>

              <h2 className="font-black text-center text-3xl">No hay pacientes</h2>
              <p className="text-xl mt-5 mb-3">
                Administra tus {''}
                <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
              </p>

            </>
          )
      }
    </div>
  )
}

export default ListadoPacientes