import './App.css';
import MainPage from './MainPage/MainPage.js';
import EscrevasePage from './Escrevase/EsrevaseLandPage.js';
import DescricaoEventoPage from "./Descricao/DescricaoLandePage.js"
import ConvidadosPage from './Convidados/Convidados.js';
import AgendaMainPage from './Agenda/AgendaMainPage.js';
import TopBarPropDesktop from '../prefabs/TobBarMenu/TopBarMenu.js';
function Landpage() {
  return (
    <div className="App">
       <TopBarPropDesktop styles={{ listStyle: 'none', margin: 0, padding: 0 }} />
      <MainPage />
      <EscrevasePage/>
      <DescricaoEventoPage />
    </div>
  );
}

export default Landpage;
