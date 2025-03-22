import React, { useRef } from "react";
import "./Convidados.css";
import SlideShowFade from "../../prefabs/SliderBar/SlideFadeBar";
import SetInterface from "./../../../Constants/MainPage/SetInterfaces.json";

const mainSlide = SetInterface.MainPageConvidados;

const ConvidadosSmall = ({ listConvidados = [], changeTo }) => {
  if (listConvidados.length < 0) {
    return <div></div>;
  }
  return (
    <div className="show-convidados">
      {listConvidados.map((convidado, index) => (
        <button
          key={index}
          className="fotoConvidado3x4"
          id={"mudarParaButton-" + index}
          onClick={() => changeTo(index)}
        >
          <img
            src={convidado.smallImage}
            className="foto3x4"
          ></img>
        </button>
      ))}
    </div>
  );
};

const ConvidadosPage = () => {
  const slideRef = useRef(null);

  function changeTo(index) {
    if (!slideRef.current) {
      console.warn('fade-change-erro');
      return;
    }
    slideRef.current.goTo(index);
  }

  return (
    <div id="convidadosPage">
      <div id="show-Detalhes">
        <SlideShowFade slides={mainSlide} ref={slideRef} />
      </div>
      <ConvidadosSmall listConvidados={mainSlide} changeTo={changeTo} />
    </div>
  );
};

export default ConvidadosPage;