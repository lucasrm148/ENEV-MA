import React, { useState, useEffect } from "react";
import "./escrevase.css"
import TopBarPropDesktop from "../prefabs/TobBarMenu/TopBarMenu.js";
import { useNavigate } from "react-router-dom";
import { GetConvites } from "../../Controller/Connection/Convites/GetConvites.js";


const CreateListConvites = (convites, handleInscreverse) => {
    if (!convites || convites.length === 0) {
        return (
            <div id="listaEscrevase">
                <p>Nenhum convite encontrado</p>
            </div>
        )
    }
    return (
        <div id="listaEscrevase">
            {convites.map((convite) => {
                return (
                    <div key={convite.id} className="produto">
                        <div className="divTextproduto">
                            <h3 className="TituloProduto">{convite.titulo.toUpperCase()}</h3>
                            <p>Valor:{convite.valor} R$</p>
                        </div>
                        <div className="divbuttonEscrever">
                            <button className="buttonEscrever confirmar" onClick={() => handleInscreverse(convite.id)}>Inscrever-se</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
 const EscrevasePage = () => {
    const navigate = useNavigate();
    const [convites, setConvites] = useState([]);
    useEffect(() => {
        GetConvites().then((data) => {
            setConvites(data);
        });
    }, []);
    return (
        <div id="mainDiv">
            <TopBarPropDesktop styles={{ listStyle: 'none', margin: 0, padding: 0 }} />
            <h1>escreva-se</h1>
            <h2>Ingressos Disponíveis</h2>
            {CreateListConvites(convites, handleInscreverse)}
            <div className="divText">
                <h2>Sobre o evento</h2>
                <p>Esse evento é organizado pelo Núcleo de Evidências em Saúde do Maranhão (NEv-MA) com o apoio da Rede EVIPNet Brasil com o propósito de promover a participação de estudantes e profissionais de saúde na elaboração e implentação  de políticas informadas por evidências. </p>
                <h3>Benefícios de Registro</h3>
                <p>Os participantes inscritos receberão um certificado e também terão acesso a todas as sessões do evento e aos anais da conferência.</p>
                <h3>Verificando a Categoria Escolhida</h3>
                <p>Os participantes inscritos receberão um certificado e também terão acesso a todas as sessões do evento e aos anais da conferência.</p>
                <h3>Forma de Pagamento</h3>
                <p> O pagamento da inscrição poderá ser feito por boleto bancário, cartão de crédito, débito,, porém os pagamentos por débito e boleto bancário serão encerrado A DEFINIR. Após essa data será possível pagar apenas com cartão de crédito.</p>
                <h3>Política de Cancelamento</h3>
                <p> Até o dia A DEFINIR poderá ser feito o reembolso de 80% do valor pago pela inscrição no SimPie NORDESTE & ENEV-MA. Após esta data não haverá devolução de qualquer valor pago. A política se aplica tanto ao cancelamento de registro quanto ao cancelamento de qualquer atividade adicional. Para solicitar o cancelamento, envie um e-mail para faturamento@enev.com.br.</p>

            </div>
        </div>

    )
    function handleInscreverse(id) {
        navigate(`/FormularioCadastro/${id}`);
    }
}
export default EscrevasePage;
