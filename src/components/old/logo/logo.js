import React from "react";
import "./logo.css";
import logo from "../Assets/Canva-logo.png"
export const Logo = () => {
    return(
        <>
        <div className="canva-logo">
                <img src={logo} alt="Logo" />
                <h4>Free Logo Maker</h4>
            </div>
        </>
    );
}