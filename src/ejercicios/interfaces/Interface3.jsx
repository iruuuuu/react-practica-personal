import React from 'react'


interface Concesionario{
    marca:string,
    modelo:string,
    caballos:number,
    plazas:number,
    año:number,
    techoDescapotable?:boolean
}

export const Interface3 = () => {


const disponibilidadConcesionario:Concesionario[]=[
    {marca:"BMW",modelo:"2QZ2",caballos:23,plazas: 2,año:2017 , techoDescapotable:true },
    {marca:"Audi",modelo:"GTI",caballos:33,plazas:4 ,año: 2000, techoDescapotable:false },
    {marca:"Citroen",modelo:"C3",caballos:5,plazas:5 ,año: 2002 },
    {marca:"Cupra",modelo:"2P2",caballos:79,plazas:5 ,año:2023 , techoDescapotable:true },
]


function cochesBajosEmisiones (coches:Concesionario[]):string[]{
    const cochesEtiquetaC = coches.filter(coche=>coche.año>2003)
    const marcaCoche= cochesEtiquetaC.map(coche=>`${coche.marca} ${coche.modelo}`)
    return marcaCoche
}

const cochesTipoC= cochesBajosEmisiones(disponibilidadConcesionario)

function cochesDescapotables (coches:Concesionario[]):string[]{
    const cochesSinTechado = coches.filter(coche=>coche.techoDescapotable===true)
    const marcaCoche= cochesSinTechado.map(coche=>`${coche.marca} ${coche.modelo}`)
    return marcaCoche
}
const cochesSinTecho= cochesDescapotables(disponibilidadConcesionario)

  return (
    <div>Interface3</div>
  )
}
