import React from 'react'

interface Alimentos {
    id:number,
    nombre:string,
    categoria:string,
    oferta?:number,
    cantidad:number
}

const Interface2 = () => {

const almacen:Alimentos[]=[
    {id:1,nombre:"platano",categoria:"fruta",oferta:0.2,cantidad:12},
    {id:2,nombre:"berengena",categoria:"verdura",oferta:0.7,cantidad:20},
    {id:3,nombre:"calabazin",categoria:"verdura",cantidad:4}
]

function alimentosOferta(productos:Alimentos[]):string[]{
    const oferta = productos.filter(producto=>producto.oferta>0.0)
    const nombre = oferta.map(produto=>producto.nombre)
    return nombre
}


const listaFinal = alimentosOferta(almacen)

  return (
    <div>Interface2</div>
  )
}

export default Interface2