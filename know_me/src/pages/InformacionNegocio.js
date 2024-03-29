import React, {useEffect, useState} from 'react'
import TituloPagina from '../components/TituloPagina'
import {TextInput, Label, SelectInput, FileInput, TextArea} from '../components/Inputs'
import {Boton} from '../components/Boton'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { loadBalancerUrl } from '../config/config'

function InformacionNegocio(props) {
    const [ emprendimiento, setEmprendimiento ] = useState(null)
    const [loading, setLoading] = useState(true)
    const [categorias, setCategorias] = useState([])

    useEffect(async function() {
        debugger
        const response = await axios.get('http://' + loadBalancerUrl + ':3001/api/v1/emprendimiento/' + props.match.params.idEmprendimiento, {
            headers: {
              'Authorization': sessionStorage.getItem('usuario_token')
            }})

        if(response.data.errorAutorizacion === true) {
            document.querySelector('#linkNoAutorizado').click()
            return
        }
        
        setEmprendimiento(response.data.emprendimiento)
        setCategorias(response.data.emprendimiento.categorias.split(','))
        setLoading(false)
    }, loading)

    const opcionesPaises = [{
        valor: 'guatemala',
        texto: 'Guatemala'
    }]

    const opcionesDepartamentos = [{
        valor: 'guatemala',
        texto: 'Guatemala'
    }, {
        valor: 'sacatepequez',
        texto: 'Sacatepequez'
    }, {
        valor: 'peten',
        texto: 'Petén'
    }, {
        valor: 'jutiapa',
        texto: 'Jutiapa'
    }, {
        valor: 'jalapa',
        texto: 'Jalapa'
    }, {
        valor: 'alta_verapaz',
        texto: 'Alta Verapaz'
    }, {
        valor: 'baja_verapaz',
        texto: 'Baja Verapaz'
    }, {
        valor: 'suchitepeques',
        texto: 'Suchitepequez'
    }, {
        valor: 'quiche',
        texto: 'Quiché'
    }, {
        valor: 'huehuetenango',
        texto: 'Huehuetenango'
    }, {
        valor: 'san_marcos',
        texto: 'San Marcos'
    }, {
        valor: 'retalhuleu',
        texto: 'Retalhuleu'
    }, {
        valor: 'zacapa',
        texto: 'Zacapa'
    }, {
        valor: 'izabal',
        texto: 'Izabal'
    }, {
        valor: 'solola',
        texto: 'Sololá'
    }, {
        valor: 'escuintla',
        texto: 'Escuintla'
    }, {
        valor: 'santa_rosa',
        texto: 'Santa Rosa'
    }, {
        valor: 'el_progreso',
        texto: 'El Progreso'
    }, {
        valor: 'quetzaltenango',
        texto: 'Quetzaltenango'
    }, {
        valor: 'mazatenango',
        texto: 'Mazatenango'
    }, {
        valor: 'chimaltenango',
        texto: 'Chimaltenango'
    }, {
        valor: 'chiquimula',
        texto: 'Chiquimula'
    }]

    const opcionesMunicipios = [{
        valor: 'guatemala',
        texto: 'Guatemala'
    }, {
        valor: 'villa_nueva',
        texto: 'Villa Nueva'
    }, {
        valor: 'amatitlan',
        texto: 'Amatilán'
    }]

    const opcionesZonas = [{
        valor: '1',
        texto: 'Zona 1'
    }, {
        valor: '2',
        texto: 'Zona 2'
    }, {
        valor: '3',
        texto: 'Zona 3'
    }, {
        valor: '4',
        texto: 'Zona 4'
    }]

    return (
        <div className="container pt-5 mt-5 pb-5">
            <div className="row">
                <div className="col">
                    <TituloPagina titulo={loading ? '' : emprendimiento.nombre} />
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-lg-6 col-12">
                    <Label clases="font-weight-bold" texto="Descripción" />
                    <p className="mb-3">{loading ? '' : emprendimiento.descripcion}</p>

                    <Label clases="font-weight-bold" texto="Número de teléfono" />
                    <p className="mb-3">{loading ? '' : emprendimiento.telefono}</p>

                    <Label clases="font-weight-bold" texto="Correo electrónico" />
                    <p className="mb-3">{loading ? '' : emprendimiento.email}</p>

                    <Label clases="font-weight-bold" texto="Página web" />
                    <p className="mb-3">{loading ? '' : emprendimiento.webPage}</p>
                </div>

                <div className="col-lg-6 col-12">                        
                    <Label clases="font-weight-bold" texto="Ubicación" />
                    <div className="d-flex flex-column">
                        <div className="contenedorInput mb-3">
                            <span>{loading ? '' : emprendimiento.pais}</span>
                        </div>

                        <div className="contenedorInput mb-3">
                            <span>{loading ? '' : emprendimiento.departamento}</span>
                        </div>

                        <div className="contenedorInput mb-3">
                            <span>{loading ? '' : emprendimiento.municipio}</span>
                        </div>

                        <div className="contenedorInput mb-3">
                            <span>{loading ? '' : emprendimiento.zona}</span>
                        </div>
                    </div>

                    <Label clases="font-weight-bold" texto="Categorías" />
                    <div className="d-flex flex-column">
                        {
                            loading ? '' :
                            categorias.map(function(categoria) {
                                return (
                                    <div className="contenedorInput mb-3">
                                        <span>{categoria}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                
                <div className="col-12 mt-5 d-flex justify-content-center">
                    <Link to="/app/inicio">
                        <Boton color="verde" texto="Regresar" />
                    </Link>                        
                </div>
            </div>         
        </div>
    )
}

export default InformacionNegocio