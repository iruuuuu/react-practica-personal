import { useActionState } from 'react'
import { toast } from 'sonner'



type estadosForm ={
    todoOk: boolean
    mensajeOrientativo: string
}


const simularApi = {
  crear: async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const nombre = data.get("nombre")
    const apellidos = data.get("apellidos")
    console.log("Creando..",{nombre,apellidos})
  }
}



const IntentoFormReact19 = () => {

const AccionForm = async (_prevState: estadosForm, formData: FormData) => {
    const nombre = String(formData.get("nombre"))
    const apellido = String(formData.get("apellido"))
    const nombreCompleto = `${nombre} ${apellido}`
    console.log("Creando..", {nombre, apellido})
    
    await simularApi.crear(formData)

    toast.success(`Hola ${nombreCompleto}`)
    
    return {
        todoOk: true,
        mensajeOrientativo: "Todo enviado"
    }
}


    const [estado,submitAction,isPending]=
        useActionState(AccionForm,{
            todoOk:false,
            mensajeOrientativo:""
        })

  return (
    <>
    <h2 className="mb-4 text-center font-bold text-blue-900 text-xl">Intento Form</h2>
    <form action={submitAction}>
        <div className="ml-[35%] border-[1px] w-[30%]">
    <label className="m-2">Nombre:</label>
    <input
    type="input"
    id="nombre"
    name="nombre"
    placeholder="introduce tu nombre"
    className=" m-2 p-4 border-[1px]"
    >
    </input>
    <br></br>
    <label className="m-2">Apellido:</label>
    <input
    type="input"
    id="nombre"
    name="nombre"
    placeholder="introduce tu nombre"
    className=" m-2 p-4 border-[1px]"
    >
    </input>
    <br></br>
    <button 
    type= "submit"
    className="border border-rounded-2px ml-[50%]">
        {isPending ? "Enviando..." : "Enviar"}
    </button>
    {estado.todoOk && <p className="text-green-500">{estado.mensajeOrientativo}</p>}
    </div>
    </form>
    </>
  )
}

export default IntentoFormReact19