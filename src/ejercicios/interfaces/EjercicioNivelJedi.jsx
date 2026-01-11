/**
 * EJERCICIO: SISTEMA DE GESTIÓN DE CLÍNICA VETERINARIA
 * * OBJETIVO: Practicar interfaces, tipos literales, propiedades opcionales 
 * y lógica de filtrado con TypeScript en React.
 * * INSTRUCCIONES:
 * * 1. Define la interface 'Mascota':
 * - id (number)
 * - nombre (string)
 * - especie (tipo literal: "perro" | "gato" | "ave")
 * - edad (number)
 * - propietario (string)
 * - estaVacunado (boolean)
 * - ultimaRevision (string, opcional)
 * * 2. Crea un array 'pacientes' de tipo Mascota[] con al menos 4 ejemplos.
 * * 3. Crea la función 'obtenerGatos':
 * - Debe recibir el array de mascotas.
 * - Debe devolver un array de strings (solo los nombres de los gatos).
 * * 4. Crea la función 'obtenerPendientesVacuna':
 * - Debe recibir el array de mascotas.
 * - Debe devolver un array de objetos Mascota (solo los que NO están vacunados).
 * * 5. Muestra los resultados en el return del componente.
 */


//type TipoEspecie = "perro" | "gato" | "ave"

interface Mascota {
    id:number,
    nombre:string,
    especie: "perro" | "gato" | "ave",    // se podria remplazar el valor por "TipoEspecie" que esta declarado arriba como comentario
    edad:number,
    propietario:string,
    estaVacunado:boolean,
    ultimaRevision?:string,
}


import React from 'react'

const EjercicioNivelJedi = () => {

    const pacientes:Mascota[]=[
        {id:1 , nombre:"Bruno", especie:"perro", edad: 3, propietario:"Jorge", estaVacunado:true , ultimaRevision:"2025-09-20"},
        {id:2 , nombre:"Lara", especie:"gato", edad:7 , propietario:"Lola", estaVacunado:true },
        {id:3 , nombre:"Dona", especie:"ave", edad: 12, propietario:"Jorge", estaVacunado: false},
        {id:4 , nombre:"Cora", especie:"gato", edad: 10 , propietario:"Lola", estaVacunado:true},
    ]


function obtenerGatos(animales:Mascota[]):string[]{
    const animalesGato= animales.filter(animal=>animal.especie==="gato")
    const datosGato = animalesGato.map(animal=>animal.nombre)
    return datosGato
}

const gatosClinica = obtenerGatos(pacientes)

function obtenerPendientesVacuna(animales: Mascota[]):Mascota[]{
    const animalesNoVacunados= animales.filter(animal=>animal.estaVacunado===false)
    return animalesNoVacunados
}

const animalesNoVacunados = obtenerPendientesVacuna(pacientes)


  return (
    <div>EjercicioNivelJedi</div>
  )
}

export default EjercicioNivelJedi