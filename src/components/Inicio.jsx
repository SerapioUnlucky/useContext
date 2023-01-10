import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

const Inicio = () => {

  const {usuario, setUsuario} = useContext(PruebaContext);

  return (
    <div>
      <h1>Inicio</h1>
      <p>Esta es la página de inicio</p>
      <p>Hola: {usuario.nick}</p>
    </div>
  )
}

export default Inicio;
