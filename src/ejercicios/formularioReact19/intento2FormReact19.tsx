import { useActionState } from 'react'
import { toast } from "sonner"


type EstadosForm={
    todoOk:boolean,
    mensajeOrientativo:string
}

const simularApi = {
  crear: async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const nombre = data.get("nombre")
    const apellidos = data.get("apellidos")
    console.log("Creando..",{nombre,apellidos})
  }
}


const Intento2FormReact19 = () => {

const AccionFormulario=async(_prevent:EstadosForm, formData:FormData)=>{
    const nombre = String(formData.get("nombre"))
    const apellido = String(formData.get("apellido"))
    const nombreCompleto = `${nombre} ${apellido}`
    console.log(`El nombre completo es ${nombreCompleto}`)


    await simularApi.crear(formData)

    toast.success(`Hola ${nombreCompleto}`)
    
    return {
        todoOk: true,
        mensajeOrientativo: "Todo enviado"
    }
}

const [estado,submitAction,isPending]=
    useActionState(AccionFormulario,{
        todoOk:false,
        mensajeOrientativo:""
    })



  return (
    <>
    <h2 className="text-center font-bold text-red-600 text-xl">FUCK FORMULARIOS , YA CASI LO CONSIGO</h2>
    <form action={submitAction}>
        <div className="mt-[50px] border border-gray-300 w-[700px] flex flex-col items-center p-6">
    <label htmlFor="nombre" className="m-4">Nombre:</label>
    <input 
    className="m-2 p-3 border text-center"
    placeholder="Introduce tu nombre"
    id="nombre"
    name="nombre"
    />
    <br></br>
        <label htmlFor="apellido" className="m-4">Apellido:</label>
    <input 
    className="m-2 p-3 border text-center"
    placeholder="Introduce tu apellido"
    id="apellido"
    name="apellido"
    />
    <br></br>
    <button type="submit" className="m-4 p-2 border bg-gray-200 rounded">
        {isPending ? "Enviando..." : "Enviar"}
    </button>
    {estado.todoOk && <p className="text-green-500">{estado.mensajeOrientativo}</p>}
    </div>
    </form>
    </>
  )
}



export default Intento2FormReact19