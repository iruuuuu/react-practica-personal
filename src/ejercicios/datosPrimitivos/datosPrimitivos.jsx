import React, { use } from 'react'



//como incluir un atributo con varias opciones con "Type"

type Etapas = "niño" | "adolescente" | "adulto" | "anciano"


interface Personas{
  nombre:string,
  edad:number,
  etapa:Etapas
}

const datosPrimitivos = () => {

const BaseDeDatos:Personas[]=[
  {nombre:"Lola",edad:54,etapa:"adulto"},
  {nombre:"Irene",edad:21,etapa:"adolescente"},
  {nombre:"Jose",edad:53,etapa:"niño"},
]

//useStateSnipped
const [usuario, setUsuario] = useState<Personas>({nombre:"",edad:0,etapa:""})
// const [usuario, setUsuario] = useState<Personas | null>(null)
// const [usuario, setUsuario] = useState<Etapas>({"adolescente"})


  return (
    <div>datosPrimitivos</div>
  )
}

export default datosPrimitivos