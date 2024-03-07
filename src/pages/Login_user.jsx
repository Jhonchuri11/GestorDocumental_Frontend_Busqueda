import React, { useEffect, useState } from "react";
import logo_student from "../assets/images/student-left-2.png";
import logo_tecsup from "../assets/images/logo-right.png";
import logo_google from "../assets/images/google-right.png";
import "../style/Login_user.css";
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';

export default function Login_user() {

    const navigate = useNavigate();

   
    const handleLoginSuccess = (response) => {

        console.log(response);
        navigate('/inicio')
    }

    const handleLoginError = (error) => {
        console.log('Login error:', error);
    }

    // Funcionalidad para el inicio de sesion de google
    //const handleLoginSuccess = (credentialResponse) => {
       
        // Muestra los datos del usuario en la consola
     //   const user = credentialResponse.profileObj;
       // console.log('User data:', user);

        //console.log('Login successful', credentialResponse);
        //navigate("/inicio");
    //}

   // const handleLoginError = (error) => {
   //     console.log('Login failed', error);
   // }

    
    return (
        // First main container
       <div className="login-page">
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="row border p-3 bg-white shadow box-area">
                <div className="col-md-6 border-end rounded d-flex justify-content-center align-items-center flex-column left-box">
                    <img src={logo_student} style={{ width: '100%' }} />
                </div>
                <div className="col-md-6 right-box">
                    <div className="row align-items-center">
                        <div className="header-text mb-4">
                            <img src={logo_tecsup} style={{ width: '50%' }}/>
                        </div>
                        <div className="mb-2">
                            <h2 class="subtitulo py-2">Te damos la bienvenida a la plataforma</h2>
                        </div>
                        <div className="mb-2">
                            <h2 class="subtitulo py-2">Iniciar sesión</h2>
                        </div>
                        <div className="mb-3 text-center">
                            {/* Este es un comentario en JSX  <a href="#" className="btn btn-lg border btn-light fs-6 btn-login">
                            <img src={google} style={{ width: '20px' }} class="me-2"/><small>Continuar con Google</small>
                            </a>
                            */}
                            
                            {/*
                            <button className="btn btn-lg border btn-light fs-6 btn-login">
                                <img src={logo_google} style={{ width: '20px' }} class="me-2"/><small>Continuar con Google</small>
                            </button>
                            
                             */}
                            
                            <GoogleLogin
                            clientId="592648497668-v8vor4i1ooauihmrl4nibrepp1cf16cu.apps.googleusercontent.com"
                            buttonText="Iniciar sesión con Google"
                            onSuccess={handleLoginSuccess}
                            onFailure={handleLoginError}
                            cookiePolicy={'single_host_origin'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div> 
    );
}