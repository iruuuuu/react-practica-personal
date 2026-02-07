import { useActionState } from "react"
import { toast } from "sonner"



type EstadosFormulario={
    todoCorrecto:boolean     //true o false 
    mensajeOrientativo:string   //"todo bien" o "algo mal"
}


/**
 * Crea un nuevo registro en la base de datos.
 * Recibe los datos del formulario por parametro y los envía al servidor.
 * Luego de 2 segundos, se muestra un mensaje en consola indicando que se está creando un nuevo registro.
 * @param {FormData} data - datos del formulario
 * @returns {Promise<void>} - promesa que se resuelve cuando se ha creado el registro
 */
const simularApi = {
  crear: async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const nombre = data.get("nombre")
    const apellidos = data.get("apellidos")
    console.log("Creando..",{nombre,apellidos})
  }
}
//-----------------------------------------------------------------------




const FormReact19 = () => {
/**
 * Función que se encarga de procesar el formulario React19.
 * Recibe los datos del formulario y los envía al servidor.
 * Luego, muestra un mensaje de éxito por pantalla (toast).
 * @param {_prevStage} Estado previo del formulario (no se utiliza)
 * @param {FormData} Los datos del formulario
 * @returns {EstadosFormulario} Estado del formulario con un mensaje orientativo
 */
    async function AccionFormulario(_prevStage:EstadosFormulario, formData:FormData){
        //recoger datos del formulario
        const nombre = String(formData.get("nombre"))
        const apellidos = String(formData.get("apellidos"))
        const fullName= `${nombre} ${apellidos}`
        console.log(fullName)
        //envio al servidor 
        await simularApi.crear(formData) //cuando acaba esta accion isPending vuelve a false
        toast.success(`Hola ${fullName}`)
    return{
        todoCorrecto:true,
        mensajeOrientativo:"Todo Ok"
        }
    }


    // " “Cuando alguien envíe este formulario, ejecuta esta función”, en este caso llama a ejecutarse a Accion Formulario "
    // inicialmente esta en false y no hay mensaje orientativo pero al ejecutarse AccionFormulario , su return cambia ese estado
    const [state, submitAction, isPending] =
        useActionState(AccionFormulario, {
            todoCorrecto: false,
            mensajeOrientativo: ""
    })

    /**
     *  const [state, submitActionl, isPending] =
        useActionState(formAction, initialState)
     */


  return (
    <>
    <div>
        <h2 
        className="m-4 text-center text-xl font-bold text-pink-600">
            FORMULARIO REACT 19 #nopucmes
        </h2>
        <form action={submitAction}>
            
            <label htmlFor="nombre">Nombre:</label>
            <input
                className="p-1 m-4 border-[2px] border-black-300 rounded-md bg-blue-400"
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Introduce tu nombre"
            >
                </input>
                <label htmlFor="apellido">Apellido:</label>
            <input
                className="p-1 m-4 border-[2px] border-black-300 rounded-md bg-blue-400"
                type="text"
                id="napellidose"
                name="apellidos"
                placeholder="Introduce tu apellido"
            >
            </input>
            <button
                className="p-1 m-4 border-[2px] border-black-300 rounded-md bg-blue-400"
                type="submit"
                disabled={isPending} 
                >
                {isPending ? "Enviando..." : "Enviar"}
            </button>
            {state.todoCorrecto && (
            <p className="text-green-500">{state.mensajeOrientativo}</p>
          )}
        </form>
    </div>
    </>
  )
}

export default FormReact19