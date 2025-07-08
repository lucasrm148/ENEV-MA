import { useNavigate } from "react-router-dom";
import TopBarPropDesktop from "../prefabs/TobBarMenu/TopBarMenu.js";
import  "./Login.css"
const Login = () => {
    const navigate = useNavigate();
    return (
        <div id="mainDiv">
            <TopBarPropDesktop />
           
            <form className='LoginForm'  onSubmit={handleSubmit}>
            <h1>LOGIN  </h1>
                <div className='divAuxLogin'>
                    <label htmlFor="cpf">CPF:</label>
                    <input className="inputLogin" type="text" id="cpf" name="cpf" />
                </div>
                <div className='divAuxLogin'>
                    <label htmlFor="senha">Senha:</label>
                    <input className="inputLogin" type="password" id="senha" name="senha" />
                </div>
                <div className='divAuxLogin'>
                    <button type="submit" className="buttonLogin">Login</button>
                </div>
            </form>
        </div>
    )
    async function handleSubmit (submit) {
        submit.preventDefault();
        const formData = new FormData(submit.target);
        const dados = {
            cpf: formData.get("cpf").replace(/\D/g, ''),
            senha: formData.get("senha"),
        };
        const result = await Login(dados);
        if (result.code === 200) {
            navigate("/User");
        }
    }
}
export default Login