import React from "react";
import UserDeviceType from "../../../Controller/ClienteInfo/UserDeviceType"
import GeneralData from "../../../Constants/GeneralData.json"
import "./MainPage.css"
import 'font-awesome/css/font-awesome.min.css';
import SlideShow from "./../../prefabs/SliderBar/SlideBar.js";
import InterfaceData from "../../../Constants/MainPage/SetInterfaces.json";
const {  MainSlideBar } = InterfaceData;


const MainPage = () => {
    return (
        <div id="MainPage">
            < SlideShow slides={MainSlideBar} >
                <div id="slider-helper">
                <div id="slideIntial" className="insideSlide">
                    <img src={`/images/logo_composta_sem_fundo.png`}  id="main_logo" className="Logo-Evento" alt="logo"></img>
                    <div className="button_div">
                        <button className="Button-mainPage">
                            <i className="fa fa-calendar-o" aria-hidden="true"></i>
                            <strong>
                                <p className="Button-MainPage">{GeneralData?.EventData?.Day1 + "-" + GeneralData?.EventData?.Day2}</p>
                            </strong>
                        </button>
                        <button className="Button-mainPage">
                            <a href={GeneralData.Local.LocalGoogle}>
                                <strong>
                                    <p className="Button-MainPage">{GeneralData.Local.localText}</p>
                                </strong>
                            </a>
                        </button>
                    </div>
                    </div>
                </div>
            </SlideShow >
        </div>

    )
}

export default MainPage;