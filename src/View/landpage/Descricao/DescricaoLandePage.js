import react from "react";
import "./DescricaoLandePage.css"
import { useNavigate } from 'react-router-dom';


const DescricaoEventoPage = ()=>{
    const navigate = useNavigate();
    return (
        <div id ="DescricaoEventoPage"> 
            <h2 id="DescricaoEventoPage-main-page" className="title-descricao">BEM VINDO AO I SIMPIE NORDESTE & II ENEv-MA</h2>
            <div id="sobrenois">
                <h3 className="title-descricao" >I SIMPIE NORDESTE (I Simpósio em Politicas Informadas por Evidências - Nordeste)</h3>
                <p  className="text-descricao">O I Simpósio em Politicas Informadas por Evidências - Nordeste é um evento que visa possibilitar debates, reflexões e construir estratégias para a institucionalização do uso de evidências científicas no processo decisório, de forma sistemática, transparente e contextualizada, no âmbito acadêmico e na gestão estadual de saúde do Maranhão e de outros estados das regiões Nordeste. Objetiva também, implementar uma agenda estadual por meio de colaborações com Instituições de Ensino Superior (IES) públicas e privadas, Rede para Políticas Informadas por Evidências do Brasil (Rede EVIPNet Brasil), Coalizão Brasileira pelas Evidências, Rede Nacional de Evidências em Direitos Humanos (ReneDH) e demais parceiros em formato de redes de pesquisa que auxiliem a consolidação das práticas da Rede Aberta de Pesquisa do Núcleo de Evidências do Maranhão (REPNEv-MA) e demais Núcleos de Evidências (NEv's) da nossa região Nordeste. O evento conta com o apoio da Universidade Federal do Maranhão (UFMA), Secretaria de Estado de Saúde do Maranhão (SES-MA), Secretaria Municipal de Saúde de São Luís-MA (Semus-São Luís), Coordenação Geral de Evidências em Saúde do Ministério da Saúde (CGEvi/DECIT/SECTICS/MS), da Rede EVIPNet Brasil e demais instituições parceiras.  É um espaço para conectar a ciência, tecnologia e políticas públicas em saúde, além de promover a reflexão e compartilhamento de experiências sobre como as evidências científicas e dados sólidos podem transformar a formulação e a implementação de políticas públicas de saúde mais eficazes e justas na região Nordeste brasileira.</p>
                <h3 className="title-descricao">II ENEV-MA (II Encontro do Núcleo de Evidências do Maranhão)</h3>
                <p  className="text-descricao">Em um contexto repleto de desafios e demandas sociais, é fundamental que as políticas públicas sejam fundamentadas em evidências científicas, assegurando não apenas a eficiência e a efetividade na gestão dos recursos, mas também o incremento dos indicadores sociais e de saúde populacionais. Desta forma, é interessante mencionar que no ano de 2024, houve o I Encontro do Núcleo de Evidências do Maranhão. Assim, nestes dois dias (12 e 13/06/205), o II Encontro do NEv-MA para Políticas Informadas por Evidências (PIE) em saúde no Maranhão tem o intuito de abordar sobre a promoção do uso local de conhecimento científico nos processos decisórios em saúde e de dialogar sobre a institucionalização efetiva das PIE e da Avaliação das Tecnologias em Saúde (ATS) no Maranhão. Haverá discussão sobre os dados e as pesquisas no campo das PIE e ATS que podem ser aplicados de maneira prática para resolver questões essenciais na área da saúde. Além disso, haverá a oportunidade de troca de experiências sobre a integração entre as diversos atores do cenário, tais como: o setor público governamental, o âmbito acadêmico, a sociedade civil e a participação popular, fortalecendo assim as políticas públicas de saúde voltadas para o aprimoramento do Sistema Único de Saúde (SUS), em especial da Atenção Primária à Saúde (APS) e da Atenção Especializada, de forma mais equânime e justa, e melhoria da qualidade de vida da população maranhense.</p>
                <button className="buttonSaibaMais" onClick={()=>navigate('/SaibaMais')}> <p className="textbuttonSaibaMais">Saiba mais</p> </button>
            </div>
        </div>
    )

}

export default DescricaoEventoPage;