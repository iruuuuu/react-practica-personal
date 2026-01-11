import React from 'react';

interface Datos {
    nombre: string;
    apellidos: string;
    edad: number;
  email?: string;
}

const Interface = () => {

const UsuariosDatos: Datos[] = [
    { nombre: "Irene Ming", apellidos: "Jimenez Hinojosa", edad: 20 },
    { nombre: "Juan", apellidos: "Perez Rodriguez", edad: 10 },
    { nombre: "Jose Maria", apellidos: "Ruano Exposito", edad: 30, email: "josemaria123@gmail.com" },
];




function obtenerNombresMayores(usuarios: Datos[]): string[] {
    // 1. Lógica: Filtramos los mayores de 18
    const filtrados = usuarios.filter(usuario => usuario.edad > 18);
    
    // 2. Lógica: Transformamos a un array de strings (nombres)
    const nombres = filtrados.map(usuario => usuario.nombre);
    
    // 3. Retornamos el resultado final de la función
    return nombres;
  }

  // Ejecutamos la función y guardamos el resultado en una constante
  const listaFinal = obtenerNombresMayores(UsuariosDatos);

return (
    <div>
      <h2>Nombres de mayores de edad:</h2>
      <ul>
        {listaFinal.map((nombre, index) => (
          <li key={index}>{nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default Interface;