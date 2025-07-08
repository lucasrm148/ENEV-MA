import React from "react";
import UserDeviceType from "../../../Controller/ClienteInfo/UserDeviceType"
import GeneralData from "../../../Constants/GeneralData.json"
import "./TopBarMenu.css"
import InterfaceData from "../../../Constants/MainPage/SetInterfaces.json";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const { MainPageTopMenu } = InterfaceData;

export const TopBarPropDesktop = ({ styles }) => {
    const navigate = useNavigate();

    const handleClick = (targetId) => {
      navigate("/");
      setTimeout(() => {
        const elemento = document.getElementById(targetId);
        if (elemento) {
          elemento.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Pequeno delay para garantir que a página foi carregada
    };
    return (
        <div id="top-bar">
            <div className="top-bar-menu-div">
                <Link to="/" id ="main_page_link" >
                    <img src="/images/logo_composta_sem_fundo.png" id="logo-menor" alt="Logo" />
                </Link>
                <ul className="top-bar-menu" style={styles}>
                    <li className="menu-item">
                    <button className="menu-link" onClick={()=>handleClick("DescricaoEventoPage")} >Sobre nós</button>
                    </li>
                    <li className="menu-item">
                    <button className="menu-link" onClick={()=>navigate("/ComissaoOrganizadora")} >Organização</button>
                    </li>
                    <li className="menu-item">
                        <button className="menu-link" onClick={()=>window.location.href="https://www.even3.com.br/i-simpie-nortenordeste-ii-enev-ma-575317/"} >Inscrições</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};


export default TopBarPropDesktop
