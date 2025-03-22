import React from "react";
import { MembroComissaoPrincipal, MembroComissaoSecundario } from "./../prefabs/membroComissao/MembroComissao"
import "./comissao.css"
import TopBarPropDesktop from "../prefabs/TobBarMenu/TopBarMenu";
const Comissao = () => {
    return (
        <div id="commisao">
            <TopBarPropDesktop styles={{ listStyle: 'none', margin: 0, padding: 0 }} />
            <h1>Commiter Organizador</h1>
            <h3 className="MembrosComissaoFuncao">Cordenadora</h3>
            <div className="ComissaoOrganizadora">
                <MembroComissaoPrincipal
                    nome="Prof Drª Ilana Mirian: pós-doutora em Epidemiologia pela UFRGS"
                    descricao="Doutora em Saúde Pública pela USP de Ribeirão Preto e Mestre em Saúde Coletiva pela UFMA. Especialista e consultora em Políticas Informadas por Evidências pelo Projeto ESPIE (Hospital Sírio Libanês). Faz o MBA em Avaliação de Tecnologias em Saúde pelo Hospital Alemão Oswaldo Cruz (MBA-ATSHAOC)."
                    image="/images/FotoIlanapng.png">
                </MembroComissaoPrincipal>
            </div>
            <h3 className="MembrosComissaoFuncao">Vice-coordenador</h3>
            <div className="ComissaoOrganizadora">
                <MembroComissaoPrincipal
                    nome="Josafá Barbosa - Mestre em enfermagem"
                    descricao="Professor da Faculdade UNDB e EDUFOR. especialista em Urgência e Emergência, em Gestão dos Serviços de Enfermagem. Atua como Gerente de Certificação e Ensino em Saúde (EMSERH)"
                    image="/images/josafa.png">
                </MembroComissaoPrincipal>
            </div>
            <div className="ComissaoOrganizadora">
                <MembroComissaoPrincipal
                    nome="Josafá Barbosa - Mestre em enfermagem"
                    descricao="Professor da Faculdade UNDB e EDUFOR. especialista em Urgência e Emergência, em Gestão dos Serviços de Enfermagem. Atua como Gerente de Certificação e Ensino em Saúde (EMSERH)"
                    image="/images/josafa.png">
                </MembroComissaoPrincipal>
            </div>
            <h3 className="MembrosComissaoFuncao">Volutarios</h3>
            <div className="volutarios">
                <div className="ComissaoOrganizadoraVolutarios">
                    <MembroComissaoSecundario
                        nome="Josafá Barbosa - Mestre em enfermagem"
                        descricao="Professor da Faculdade UNDB e EDUFOR. especialista em Urgência e Emergência, em Gestão dos Serviços de Enfermagem. Atua como Gerente de Certificação e Ensino em Saúde (EMSERH)"
                        image="/images/josafa.png">
                    </MembroComissaoSecundario>
                </div>
                <div className="ComissaoOrganizadoraVolutarios">
                    <MembroComissaoSecundario
                        nome="Josafá Barbosa - Mestre em enfermagem"
                        descricao="Professor da Faculdade UNDB e EDUFOR. especialista em Urgência e Emergência, em Gestão dos Serviços de Enfermagem. Atua como Gerente de Certificação e Ensino em Saúde (EMSERH)"
                        image="/images/josafa.png">
                    </MembroComissaoSecundario>
                </div>
                <div className="ComissaoOrganizadoraVolutarios">
                    <MembroComissaoSecundario
                        nome="Josafá Barbosa - Mestre em enfermagem"
                        descricao="Professor da Faculdade UNDB e EDUFOR. especialista em Urgência e Emergência, em Gestão dos Serviços de Enfermagem. Atua como Gerente de Certificação e Ensino em Saúde (EMSERH)"
                        image="/images/josafa.png">
                    </MembroComissaoSecundario>
                </div>
                <div className="ComissaoOrganizadoraVolutarios">
                    <MembroComissaoSecundario
                        nome="Josafá Barbosa - Mestre em enfermagem"
                        descricao="Professor da Faculdade UNDB e EDUFOR. especialista em Urgência e Emergência, em Gestão dos Serviços de Enfermagem. Atua como Gerente de Certificação e Ensino em Saúde (EMSERH)"
                        image="/images/josafa.png">
                    </MembroComissaoSecundario>
                </div>
            </div>
        </div>
    )
}

export default Comissao;
