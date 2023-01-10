import React, { useContext } from 'react';
import { Routes, Route, NavLink, BrowserRouter } from 'react-router-dom';
import Inicio from '../components/Inicio';
import Articulos from '../components/Articulos';
import Contacto from '../components/Contacto';
import Acerca from '../components/Acerca';
import Login from '../components/Login';
import { PruebaContext } from '../context/PruebaContext';

const AppRouter = () => {

    const { usuario, setUsuario } = useContext(PruebaContext);

    return (

        <BrowserRouter>

            {/* Menu navegacion */}
            <header className='header'>

                <nav>

                    <div>

                        <h2>Context</h2>

                    </div>

                    <ul>

                        {usuario.hasOwnProperty("nick") && usuario.nick !== null ? (

                            <>

                                <li>
                                    <NavLink to="/">Inicio</NavLink>
                                </li>

                                <li>
                                    <NavLink to="/articulos">Articulos</NavLink>
                                </li>

                                <li>
                                    <NavLink to="/contacto">Contacto</NavLink>
                                </li>

                                <li>
                                    <NavLink to="/acerca">Acerca</NavLink>
                                </li>



                                <li>

                                    <NavLink to="/">{usuario.nick}</NavLink>
                                    <NavLink to="#" onClick={e => {
                                        e.preventDefault();
                                        setUsuario({});
                                    }}>Cerrar sesión</NavLink>

                                </li>
                            </>

                        ) : (

                            <li>

                                <NavLink to="/login">Login</NavLink>

                            </li>
                        )}

                    </ul>

                </nav>

            </header>

            {/* Configurar rutas */}
            <section className='content'>

                <Routes>

                    <Route path="/" element={<Inicio />} />
                    <Route path="/inicio" element={<Inicio />} />
                    <Route path="/articulos" element={<Articulos />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/acerca" element={<Acerca />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<h1>404 Not Found</h1>} />

                </Routes>

            </section>

        </BrowserRouter>

    )
}

export default AppRouter;
