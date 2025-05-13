import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landpage from "./../View/landpage/LandPage"
import SaibaMais from '../View/SaibaMais/SaibaMais';
import Comissao from '../View/Comissao/Comissao';
import EscrevasePage from '../View/Escrevase/Escrevase';
import {FormularioCadastro} from '../View/FormularioCadastro/FormularioCadastro';
const  AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Landpage />} />
            <Route path="/SaibaMais" element={<SaibaMais />}  />
            <Route path="/ComissaoOrganizadora" element={<Comissao />}  />
            <Route path="/Escrevase" element={<EscrevasePage />}  />
            <Route path="/FormularioCadastro/:id" element={<FormularioCadastro />}  />
        </Routes>
    </Router>
);

export default AppRoutes;