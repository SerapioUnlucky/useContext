import React, { useEffect, useState } from 'react'
import './App.css'
import { PruebaContext } from './context/PruebaContext'
import AppRouter from './router/appRouter'

function App() {

  const [usuario, setUsuario] = useState({});

  useEffect(() => {

    let usuario_local = JSON.parse(localStorage.getItem("usuario"));

    setUsuario(usuario_local);

  }, [])

  useEffect(() => {

    localStorage.setItem("usuario", JSON.stringify(usuario));

  }, [usuario])

  const curso = {
    id: 1,
    nombre: "React desde cero",
    contenido: "React, Hooks, Context, Redux, etc."
  }

  return (
    <div className="App">

      <PruebaContext.Provider value={{usuario, setUsuario}}>
        <AppRouter/>
      </PruebaContext.Provider>
    </div>
  )
}

export default App
