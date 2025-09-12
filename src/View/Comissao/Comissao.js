import React from "react";
import { MembroComissaoPrincipal, MembroComissaoSecundario } from "./../prefabs/membroComissao/MembroComissao"
import "./comissao.css"
import TopBarPropDesktop from "../prefabs/TobBarMenu/TopBarMenu";
const Comissao = () => {
    return (
        <div id="commisao">
            <TopBarPropDesktop styles={{ listStyle: 'none', margin: 0, padding: 0 }} />
            <h1>Comitê Organizador</h1>
            <h3 className="MembrosComissaoFuncao">Cordenadora</h3>
            <div className="ComissaoOrganizadora">
                <MembroComissaoPrincipal
                    nome="Prof Drª Ilana Mirian: pós-doutora em Epidemiologia pela UFRGS"
                    descricao="Doutora em Saúde Pública pela USP de Ribeirão Preto e Mestre em Saúde Coletiva pela UFMA. Especialista e consultora em Políticas Informadas por Evidências pelo Projeto ESPIE (Hospital Sírio Libanês). Faz o MBA em Avaliação de Tecnologias em Saúde pelo Hospital Alemão Oswaldo Cruz (MBA-ATSHAOC)."
                    image="/images/ilana_miriam.png">
                </MembroComissaoPrincipal>
            </div>
            <h3 className="MembrosComissaoFuncao">Vice-coordenador</h3>
            <div className="ComissaoOrganizadora">
                <MembroComissaoPrincipal
                    nome="Josafá Barbosa - Mestre em enfermagem"
                    descricao="Professor da Faculda de UNDB e EDUFOR. especialista em Urgência e Emergência, em Gestão dos Serviços de Enfermagem. Atua como Gerente de Certificação e Ensino em Saúde (EMSERH)"
                    image="/images/josafa.png">
                </MembroComissaoPrincipal>
            </div>
            <div className="ComissaoOrganizadora">
                <MembroComissaoPrincipal
                    nome="Fernanda Lima - Psicóloga Mestre em saúde da criança e do adulto"
                    descricao="Especialista em Gestão de Programas de Residência em Saúde e em Políticas de Saúde Informadas por Evidências pelo Sírio Libanês. Membro do Colégio Brasileiro de Executivos em Saúde. Atua como Assessora do Núcleo de Acompanhamento de Contratos da Secretaria de Saúde da Bahia."
                    image="/images/fernanda_lima.jpg">
                </MembroComissaoPrincipal>
            </div>
            <h3 className="MembrosComissaoFuncao">voluntarismo</h3>
            <div className="volutarios">
                <div className="ComissaoOrganizadoraVolutarios">
                    <MembroComissaoSecundario
                        nome="Hozana de almeida evangelista"
                        descricao="Enfermeira Mestranda em Saúde da família. Docente de aprendizagem e Multi em formação (Fiocruz)"
                        image="/images/Hozana_almeida_evangelista.png">
                    </MembroComissaoSecundario>
                </div>
                <div className="ComissaoOrganizadoraVolutarios">
                    <MembroComissaoSecundario
                        nome="Paula Almeida de Paula"
                        descricao="Enfermeira Mestranda em Saúde da Família (RENASF/UFMA)"
                        image="/images/paula_almeida.png">  
                    </MembroComissaoSecundario>
                </div>
                <div className="ComissaoOrganizadoraVolutarios">
                    <MembroComissaoSecundario
                        nome="Chirley Raiany Ferreira Diniz Fontes"
                        descricao="Estudante de Enfermagem (Edufor) e pesquisadora do Programa(GEPSET)"
                        image="/images/chirley.jpg">
                    </MembroComissaoSecundario>
                </div>
                <div className="ComissaoOrganizadoraVolutarios">
                    <MembroComissaoSecundario
                        nome="Yuri Armin Crispim de Moraes"
                        descricao="Médico de Família e Comunidade (SBMFC), mestrando em Saúde da Família na RENASF, docente e coordenador na Faculdade de Medicina da Edufor IDOMED Estácio"
                        image="/images/cara_sem_nomejpeg.png">
                    </MembroComissaoSecundario>
                </div>
                <div className="ComissaoOrganizadoraVolutarios">
                    <MembroComissaoSecundario
                        nome="Lucas Ribeiro Madeira"
                        descricao="Programador e Estudante de Ciência da Computação"
                        image="/images/me.jpg">
                    </MembroComissaoSecundario>
                </div>
                <div className="ComissaoOrganizadoraVolutarios">
                    <MembroComissaoSecundario
                        nome="Hudson Andrade"
                        descricao="graduando em história pela ufma"
                        image="/images/hudson.jpg">
                    </MembroComissaoSecundario>
                </div>
                <div className="ComissaoOrganizadoraVolutarios">
                    <MembroComissaoSecundario
                        nome="Lívia Alessandra Gomes Aroucha"
                        descricao="Mestre em Enfermagem. Doutoranda em Saúde Coletiva. Especialista em Terapia Intensiva."
                        image="/images/Livia_Alessandra.jpg">
                    </MembroComissaoSecundario>
                </div>
                <div className="ComissaoOrganizadoraVolutarios">
                    <MembroComissaoSecundario
                        nome="José Américo da Silva Filho"
                        descricao="Mestrando em saúde da família pela Renasf-UFMA.Preceptor do curso de medicina Uniceuma.Médico da Câmara Técnica de Assessoramento do Serviço de Saúde do Estado do Maranhão."
                        image="/images/Jose_Americo.jpg">
                    </MembroComissaoSecundario>
                </div>
                <div className="ComissaoOrganizadoraVolutarios">
                    <MembroComissaoSecundario
                        nome="Andréa Cristina"
                        descricao="Enfermeira. Professora do Curso de Enfermagem, Campus do Bacanga. Doutora em Ciências pela Escola de Enfermagem de Ribeirão Preto da Universidade de São Paulo."
                        image="/images/Andrea Cristina.jpg">
                    </MembroComissaoSecundario>
                </div>
                <div className="ComissaoOrganizadoraVolutarios">
                    <MembroComissaoSecundario
                        nome="Ana Beatriz Oliveira Rocha"
                        descricao="Cursando Técnico em Enfermagem no Colégio Universitário (Colun)"
                        image="/images/Ana Beatriz.jpg">
                    </MembroComissaoSecundario>
                </div>
            </div>
        </div>
    )
}

export default Comissao;
