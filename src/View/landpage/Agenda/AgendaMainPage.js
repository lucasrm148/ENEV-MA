import React, { useRef } from "react";
import "./AgendaMainPage.css"
import LandPage from "../../../Constants/LandPage.json"

const AgendaMainPage =()=>{''
    return (
        <div id ="AgendaMainPage">
            <div id="Dia1" className="dia-info">
                <h3 className="TituloDia">Dia 1</h3>
                <ol className="lista-agenda">
                {LandPage.Agenda.Dia1.map((item, index)=>{
                    return (
                        <li key={index} className="agenda-item">
                              <p className="hora">{item.hora}</p>
                            <p className="atividade">{item.ativiade}</p>
                            <p className="descricao">{item.descricao}</p>
                        </li>
                    )
                })}
                </ol>
            </div>
            <div id="Dia2" className="dia-info">
                <h3 className="TituloDia">Dia 2</h3>
                <ol className="lista-agenda">
                {LandPage.Agenda.Dia2.map((item, index)=>{
                    return (
                        <li key={index} className="agenda-item">
                             <p className="hora">{item.hora}</p>
                            <p className="atividade">{item.ativiade}</p>
                            <p className="descricao">{item.descricao}</p>
                        </li>
                    )
                })}
                </ol>
            </div>
        </div>
    )
}
export default AgendaMainPage;