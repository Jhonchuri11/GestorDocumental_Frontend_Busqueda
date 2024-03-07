import axios from "axios";
import React, { useEffect, useState } from "react"
import {  Link, useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function DeleteDocumento() {

    const navigate = useNavigate();

    // Constante que recoge id del documento
    const {id} = useParams();

    const [formData, setFormData] = useState({
        titulo: "",
        autores: "",
        resumen: "",
        anioPublicacion: "",
        asesor: "",
        categoria: "",
        tema: ""
    });

    const [documento, setDocumento] = useState([]);

    // Funcionalidad que obtiene los datos del docuemnto por su ID
    useEffect(() => {
        // Consultamos y obtenemos dato del doc ID
        axios.get(`http://localhost:8087/api/documentos/find/${id}`)
        .then(response => {
            setDocumento(response.data);
            setFormData({
                titulo: response.data.titulo,
                autores: response.data.autores,
                resumen: response.data.resumen,
                anioPublicacion: response.data.anioPublicacion,
                asesor: response.data.asesor,
                categoria: response.data.categoria,
                tema: response.data.tema
        });

        })
        .catch(error => {
            console.error('Error fetching documento:', error);
            
        });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
    };

    const handleDeleteDocumento = (e) => {

        e.preventDefault();

        Swal.fire({
            title: 'Estás seguro de eliminar el documento?',
            text: '!No podrás revertir esto!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.isConfirmed) {

                try {
                    await axios.delete(`http://localhost:8087/api/documentos/delete/${id}`, formData)

                    console.log("Documento eliminado!");

                    navigate('/listadoDocumento');
                    Swal.fire(
                        '!Eliminado!',
                        'El documento ha sido eliminado correctamente.',
                        'success'
                    );

                } catch (error) {

                    console.log('Error deleting documento:', error);
                
                    Swal.fire(
                        '¡Error!',
                        'Hubo un problema al eliminar el documento. Inténtalo de nuevo más tarde.',
                       'error'
                   );
                }
            }
        })
    };

    return (
        <section>
        <div className="container p-3">
        <h2>Eliminación de  documento</h2>
        <hr/>
        <div className="login-pages bg-light">
            <div className="container p-4">
               <div className="row">
                    <div className="col-lg-12">
                        <div className="bg-white shadow rounded">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-left h-100 py-5 px-5">
                                        <form onSubmit={handleDeleteDocumento} className="formulario">
                                            <div className="row g-4">
                                                <div className="col-6">
                                                    <label>TITULO<span class="text-danger">*</span></label>
                                                                    <div className="input-group">
                                                                    <div className="input-group-text">
                                                                       <i class="bi bi-chat-right-dots"></i>
                                                                    </div>
                                                                    <input 
                                                                    type="text"
                                                                    readOnly
                                                                    className="form-control"
                                                                    onChange={handleChange}
                                                                    id="titulo"
                                                                    name="titulo"
                                                                    value={formData.titulo} 
                                                                    placeholder="Título"/>
                                                                    </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <label>AUTORES<span className="text-danger">*</span></label>
                                                                    <div className="input-group">
                                                                    <div className="input-group-text">
                                                                        <i class="bi bi-person-lines-fill"></i>
                                                                    </div>
                                                                    <input
                                                                    type="text" 
                                                                    readOnly
                                                                    className="form-control" 
                                                                    placeholder="Nombres y apellidos"
                                                                    onChange={handleChange}
                                                                    id="autores"
                                                                    name="autores"
                                                                    value={formData.autores}/>
                                                                    </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <label>RESUMEN<span class="text-danger">*</span></label>
                                                                    <div className="input-group">
                                                                    <div className="input-group-text">
                                                                        <i className="bi bi-card-text"></i>
                                                                    </div>
                                                                    <textarea 
                                                                    className="form-control" 
                                                                    readOnly
                                                                    placeholder="Resumen"
                                                                    onChange={handleChange}
                                                                    id="resumen"
                                                                    name="resumen"
                                                                    value={formData.resumen}
                                                                    ></textarea>
                                                                    </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <label>AÑO DE PUBLICACIÓN<span class="text-danger">*</span></label>
                                                                    <div className="input-group">
                                                                    <div className="input-group-text">
                                                                        <i className="bi bi-calendar2-day"></i>
                                                                    </div>
                                                                    <input 
                                                                    type="number" 
                                                                    readOnly
                                                                    class="form-control" 
                                                                    placeholder="Ejemplo: 2023"
                                                                    onChange={handleChange}
                                                                    id="anioPublicacion"
                                                                    name="anioPublicacion"
                                                                    value={formData.anioPublicacion}/>
                                                                    </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <label>ASESOR<span className="text-danger">*</span></label>
                                                                    <div className="input-group">
                                                                    <div className="input-group-text">
                                                                        <i className="bi bi-person-fill"></i>
                                                                    </div>
                                                                    <input 
                                                                    type="text" 
                                                                    readOnly
                                                                    className="form-control" 
                                                                    placeholder="Nombres y apellidos"
                                                                    onChange={handleChange}
                                                                    id="asesor"
                                                                    name="asesor"
                                                                    value={formData.asesor}/>
                                                                    </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <label>CATEGORIA<span className="text-danger">*</span></label>
                                                                    <div className="input-group">
                                                                    <div className="input-group-text">
                                                                        <i className="bi bi-bookmark-star"></i>
                                                                    </div>
                                                                    <input 
                                                                    type="text" 
                                                                    readOnly
                                                                    className="form-control" 
                                                                    placeholder="Categoria"
                                                                    onChange={handleChange}
                                                                    id="categoria"
                                                                    name="categoria"
                                                                    value={formData.categoria}/>
                                                                    </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <label>TEMA<span className="text-danger">*</span></label>
                                                                    <div className="input-group">
                                                                    <div className="input-group-text">
                                                                        <i class="bi bi-chat-square-text-fill"></i>
                                                                    </div>
                                                                    <input 
                                                                    type="text" 
                                                                    readOnly
                                                                    className="form-control" 
                                                                    placeholder="Tema"
                                                                    onChange={handleChange}
                                                                    id="tema"
                                                                    name="tema"
                                                                    value={formData.tema}/>
                                                                    </div>
                                                            </div>
                                                            <div class="col-12">
                                                                <button class="btn btn-danger px-4 float-end mt-4 me-2">Eliminar</button>
                                                                <Link to={'/listadoDocumento'} class="btn btn-success px-4 float-end mt-4 me-2">Volver</Link>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
    </section>
    )
}