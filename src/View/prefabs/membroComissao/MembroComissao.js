import React from "react";
import "./MembroComissao.css"
export const MembroComissaoPrincipal = ({ image = "", nome = "", descricao = "" }) => {
    return (
        <div className="MembroComissaoPrincipal">
            <div className="imgemMembroComissaoDiv">
                <img src={image} className="imgemMembroComissao"></img>
            </div>
            <div className="MebroComissaoTextDiv">
                <h2 className="MembroComissaoTitle">{nome}</h2>
                <p className="MembroComissaoText">{descricao}</p>
            </div>
        </div>
    )

}
export const MembroComissaoSecundario = ({ image, nome, descricao }) => {

    return (
        <div className="MembroComissaoSecundario">
            <div className="imgemMembroComissaoDivSecundario">
                <img
                    src={image}
                    className="imgemMembroVolutario"
                    alt="Membro"
                />
            </div>
            <h3 className="MembroComissaoTitleVolutario">{nome}</h3>
            <h4 className="MembroComissaoTextVolutario">{descricao}</h4>
        </div>
    );
};