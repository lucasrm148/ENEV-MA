import React from "react";


const LoadingText = (paragrafoList, id) => {
    paragrafoList = [{ descricao: "text", styles: 'h1' }, { descricao: "text", styles: 'h1' }]
    let reder = []
    paragrafoList.forEach(poragrafo => {
        switch (poragrafo) {
            case "h1":
                reder.push(<h1 className=´ ${id} h1´></h1>)
                break;
            case "h2":

                break;
            case "h3":

                break;
            case "h4":

                break;
            case "h5":

                break;
            default:
                break;
        }
        if (paragrafoList.styles)
    });
    return (
        <div className="textLoader" id={id}>

        </div>
    )
}