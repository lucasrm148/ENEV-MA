
import './App.css';
import AppRoutes from "./Routes/Routes.js"
import Logos from "./View/prefabs/logos/Logos.js"
function App() {
  return (
    <div className="App">
     
      <AppRoutes/>
      <footer className="App-footer">
      <Logos/>
      ©2025 - Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default App;
