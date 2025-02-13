import React from "react";
import UserDeviceType from "../../../Controller/ClienteInfo/UserDeviceType"
import GeneralData from "../../../Constants/GeneralData.json"
import "./MainPage.css"
import logo from "./../../../resourses/image/old_logo.png";
import 'font-awesome/css/font-awesome.min.css';
import SlideShow from "./../../prefabs/SliderBar/SlideBar.js";
import InterfaceData from "../../../Constants/MainPage/SetInterfaces.json";
const { MainPageTopMenu, MainSlideBar } = InterfaceData;
console.log(MainSlideBar);
const TopBarPropDesktop = ({ styles }) => {
    const menuItems = MainPageTopMenu;
    return (
        <ul className="top-bar-menu" style={styles}>
            {menuItems.map(item => (
                <li key={item.id} className="menu-item">
                    <a className="menu-link" href={item.link}>{item.text}</a>
                </li>
            ))}
        </ul>
    );
}

const MainPage = () => {
    const isMobile = UserDeviceType();
    return (
        <div className="mainPage">
            <div className='top-bar'>
                {!isMobile && <TopBarPropDesktop styles={{ listStyle: 'none', margin: 0, padding: 0 }} />}
            </div>
            < SlideShow slides={MainSlideBar} >
                <div id="slideIntial" className="insideSlide">
                    <img src={logo} id="main_logo" className="Logo-Evento" alt="logo"></img>
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
            </SlideShow >
        </div>

    )
}

export default MainPage;