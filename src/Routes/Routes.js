import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landpage from "./../View/landpage/LandPage"
import SaibaMais from '../View/SaibaMais/SaibaMais';
import Comissao from '../View/Comissao/Comissao';
const  AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Landpage />} />
            <Route path="/SaibaMais/" element={<SaibaMais />}  />
            <Route path="/ComissaoOrganizadora/" element={<Comissao />}  />
        </Routes>
    </Router>
);

export default AppRoutes;