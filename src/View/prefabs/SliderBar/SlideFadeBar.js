import React,{useRef, forwardRef, useImperativeHandle } from "react";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import "./SlideBar.css";


const SlideShowFade = forwardRef(({ slides, id, children },ref) => {

  const slideRef = useRef(null);
  useImperativeHandle(ref, () => ({
    next: () => slideRef.current?.goNext(),
    prev: () => slideRef.current?.goBack(),
    goTo: (index) => slideRef.current?.goTo(index),
  }));
  const properties = {
    duration: 3000, // Tempo em milissegundos que cada slide será exibido
    transitionDuration: 500, // Tempo em milissegundos da transição entre slides
    infinite: false, // Se o slideshow deve ser infinito
    autoplay: true,
  };
  return (
    <div id={id} className="slide-container">
      <Fade {...properties} ref={slideRef}>
        {slides.map((slideImage, index) => (
          <div  key={index}  className="Slide">
            <img 
            src={slideImage.src}
            className="imageStyle"
            >
            </img>
            <div className="slide-content">
              {children}
            <div className="text-slide-Content">
            <p className="Titulo-slide">{slideImage.descricao}</p>
            <p>{slideImage.descricao_completa}</p>
            </div>
             
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );

});

export default SlideShowFade;
