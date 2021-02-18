import React from 'react'
import TituloPagina from '../components/TituloPagina'
import {TextInput} from '../components/Inputs'
import {Boton} from '../components/Boton'
import {Link} from 'react-router-dom'

function Login(props) {
    return (
        <div className="container pt-5 mt-5">
            <div className="row">
                <div className="col-lg-4 offset-lg-4 col-12">
                    <TituloPagina titulo="Login" />
                    <TextInput placeholder="Email o nombre de usuario" name="email" tipo="text" clases="mb-3 mt-5"/>
                    <TextInput placeholder="Contraseña" name="password" tipo="password" />

                    <div className="d-flex flex-lg-row flex-column justify-content-center align-items-center mt-3">

                        <Link to="/inicio">
                            <Boton texto="Iniciar sesión" color="verde" />
                        </Link>

                        <Link to="/registro">
                            <Boton texto="Registrarse" color="amarillo" clases="ml-lg-3 mt-lg-0 mt-3" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login