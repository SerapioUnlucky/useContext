import React, {useContext} from 'react'
import { PruebaContext } from '../context/PruebaContext'

const Login = () => {

  const {usuario, setUsuario} = useContext(PruebaContext);

  const guardarDatos = (e) => {

    e.preventDefault();

    let usuario = {nick: e.target.nick.value, nombre: e.target.nombre.value, edad: e.target.edad.value};

    setUsuario(usuario);

  }

  return (
    <div>
      <h1>Login</h1>
      <p>Esta es la página login</p>

      <form className='login' onSubmit={guardarDatos}>

        <input type="text" name="nick" placeholder="Introduce tu nickname" />
        <input type="text" name="nombre" placeholder="Introduce tu nombre" />
        <input type="number" name="edad" placeholder="Introduce tu edad" />
        <input type="submit" value="Enviar" />

      </form>

    </div>
  )
}

export default Login;
