import React from "react";
import TimeNow from "./../../../Controller/ClienteInfo/TimeNow.js"
import UserDeviceType from "../../../Controller/ClienteInfo/UserDeviceType"
import "./EscrevaseLandPage.css"
import generalData from "./../../../Constants/GeneralData.json"
import { useNavigate } from "react-router-dom";
const EventeData = generalData.EventData.EventDataTime;

const EscrevasePage = () => {
    const navigate = useNavigate();
    const eventeData = new Date(EventeData)
    
    const timer = TimeNow()
    const timerTo = timer.tempoAte(eventeData)

    const isMobile = UserDeviceType();
    return (
        <div id="escrevasePage">
            <div id="escrevaseTimer">
                <div className="timerEsfera" id="esfera-mes">
                    <p className="TextTimerEsfera">{timerTo.meses}</p>
                    <p className="descricaoTimerEsfera"> MESES </p>
                </div>
                <div className="timerEsfera" id="esfera-dia">
                    <p className="TextTimerEsfera">{timerTo.dias}</p>
                    <p className="descricaoTimerEsfera">DIAS</p>
                </div>
                <div className="timerEsfera" id="esfera-hora">
                    <p className="TextTimerEsfera">{timerTo.horas}</p>
                    <p className="descricaoTimerEsfera">HORAS </p>
                </div>
                <div className="timerEsfera" id="esfera-minuto">
                    <p className="TextTimerEsfera">{timerTo.minutos}</p>
                    <p className="descricaoTimerEsfera">MINUTOS </p>
                </div>
            </div>
            <a href="" onClick={() => navigate("/Escrevase")} id="escrevaseButton">
                <p id="escrevaseButtonText">inscriçoes embreve</p>
            </a>
        </div>
        
    )
}


export default EscrevasePage;