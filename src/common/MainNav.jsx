import React from "react";
import logotec from '../assets/images/logo_tecsup-2.png';
import profile from '../assets/images/profile.png';
import Dropdown from "./Dropdown";
import { useGoogleOAuth } from "@react-oauth/google";

export default function MainNav() {

    const {user, loading, error, singIn, singOut } = useGoogleOAuth();

    const toggleMenu = () => {

        var subMenu = document.getElementById("subMenu");
        subMenu.classList.toggle("open-menu");
    }
    return (
        // Nav principal
        <nav className="navbar navbar-expand-lg navbar-info bg-info">
            <div className="container">
                <img src={logotec} width={"250px"}  class="navbar-brand"/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse  navbar-collapse" id="navMneu">
                    <div className="navbar-nav ms-auto">
                        
                        <li className="nav-item">
                            <button  className="nav-link" onClick={toggleMenu}><img src={profile} width={"40px"} /></button>
                        </li>
                    </div>
                </div>
            </div>
            
            <div>
            {
                toggleMenu && (
                    <Dropdown/>  
                )
            } 
            </div>
        </nav>
    
    )
}