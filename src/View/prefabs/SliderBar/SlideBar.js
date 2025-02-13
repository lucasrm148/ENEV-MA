import React, { useState, useEffect } from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import "./SlideBar.css";


const SlideShow = ({ slides, id, children }) => {
  const properties = {
    duration: 60, // Tempo em milissegundos que cada slide será exibido
    transitionDuration: 100, // Tempo em milissegundos da transição entre slides
    infinite: true, // Se o slideshow deve ser infinito
    indicators: true, // Se deve exibir indicadores de navegação
    arrows: true, // Se deve exibir setas de navegação
  };
  const slideStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh', // Altura total da viewport
    position: 'relative',
  };

  const contentStyle = {
    position: 'absolute',
    zIndex: 1,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };
  return (
    <div id={id} className="slide-container">
      <Slide {...properties}>
        {slides.map((slideImage, index) => (
          <div  key={index} style={slideStyle}>
            <img 
            src={slideImage.src}
            style={imageStyle}
            >
            </img>
            <div className="slide-content" style={contentStyle}>
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
