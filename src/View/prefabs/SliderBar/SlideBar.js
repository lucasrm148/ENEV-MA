import React, { useState, useEffect } from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import "./SlideBar.css";


const SlideShow = ({ slides, id, children }) => {
  const properties = {
    duration: 3000, // Tempo em milissegundos que cada slide será exibido
    transitionDuration: 500, // Tempo em milissegundos da transição entre slides
    infinite: true, // Se o slideshow deve ser infinito
    indicators: true, // Se deve exibir indicadores de navegação
    arrows: true, // Se deve exibir setas de navegação
    autoplay: true,
  };
  return (
    <div id={id} className="slide-container">
      <Slide {...properties}>
        {slides.map((slideImage, index) => (
          <div  key={index}  className="Slide">
            <img 
            src={slideImage.src}
            className="imageStyle"
            >
            </img>
            <div className="slide-content">
              <p>{slideImage.mensage}</p>
              {children}
            </div>
          </div>
        
        ))}
      </Slide>
    </div>
  );
};

export default SlideShow;
