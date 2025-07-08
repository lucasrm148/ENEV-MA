import React from "react";
import "./LogoStyles.css";
const Logos = () => {
    return (
        <div id="logos">
            <h3>Patrocinadores</h3>
            <div id="Patrocinio">
                <img src={"/images/patrocinadores/cnpq.png"} className="logo" alt="logo"></img>
                <img src={"/images/patrocinadores/evipnet.jpg"} className="logo" alt="logo"></img>
                <img src={"/images/patrocinadores/nev.jpg"} className="logo" alt="logo"></img>
            </div>
            <h3>Apoio: </h3>
            <div id="Patrocinio">
                <img src={"/images/patrocinadores/sao_luis.jpg"} className="logo" alt="logo"></img>
                <img src={"/images/patrocinadores/maranhao.png"} className="logo" alt="logo"></img>
                <img src={"/images/patrocinadores/govbr.png"} className="logo" alt="logo"></img>
                <img src={"/images/patrocinadores/sus.png"} className="logo" alt="logo"></img>
                <img src={"/images/patrocinadores/uninassau.jpg"} className="logo" alt="logo"></img>
                <img src={"/images/patrocinadores/tjma.png"} className="logo" alt="logo"></img>
                <img src={"/images/patrocinadores/espma.jpg"} className="logo" alt="logo"></img>
                <img src={"/images/patrocinadores/anhagura.jpg"} className="logo" alt="logo"></img>
                <img src={"/images/patrocinadores/ufma.png"} className="logo" alt="logo"></img>
            </div>
        </div>
    )
}//
////
export default Logos;