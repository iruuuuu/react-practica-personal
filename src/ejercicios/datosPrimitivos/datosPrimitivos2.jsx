import React, { use } from 'react'



//Como hacer uso del "keyof"

//¿Que hace o que es un keyof?
//Es un extractor. Saca los nombres de las propiedades de una interface.

type Etapas = "niño" | "adolescente" | "adulto" | "anciano"


interface Personas{
  nombre:string,
  edad:number,
  etapa:Etapas
}


type datosPersonas = keyof Personas
/**
 *Su salida seria la siguiente
  * type datosPersonas = "nombre" | "edad" | "etapa"
 */



//se puede hacer la inversa es decir a un keyof aplicarle un type y que te devuelva una interface
type datosPersonas2 = {
  [key in datosPersonas]: Personas[key]
}
/**
 * Su salida seria la siguiente
 * type datosPersonas2 = {
    nombre: string;
    edad: number;
    etapa: Etapas;
  }
 */


  return (
    <div>datosPrimitivos</div>
  )
}

export default datosPrimitivos