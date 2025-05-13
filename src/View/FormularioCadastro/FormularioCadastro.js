import './FormularioCadastro.css'
import { Cadastrar } from "./../../Controller/Connection/Cadastrar/Cadastrar";
import { GetConvitesById } from "./../../Controller/Connection/Convites/GetConvites";
import React, { useState, useEffect } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
export const FormularioCadastro = () => {
    const navigate = useNavigate();
    const [convite, setConvite] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        GetConvitesById(id).then((data) => {
            setConvite(data);
        });
    }, []);
    const ingresso = "Ingresso";
    const valor = "Valor";
    const tipo_convite = "estudante";
        return (
        <div id="mainDiv">
            <h1>Formulario de Cadastro</h1>
            <form className='formCadastro'  onSubmit={handleSubmit}>
                <div className='didIngresso'>
                    <h2>{convite?.titulo}</h2>
                    <h2>valor:{convite?.valor}R$</h2>
                    <p>{convite?.descricao}</p>
                </div>
                <div className='divAux'>
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div className='divAux'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className='divAux'>
                    <label htmlFor="cpf">CPF</label>
                    <input type="text" id="cpf" name="cpf" />
                    <div className='divAux'>
                        <select id="genero" name="genero" label="Genero">
                            <option value="masculino">Masculino</option>
                            <option value="feminino">Feminino</option>
                            <option value="outro">Outro</option>
                        </select>
                    </div>
                </div>
                <div className='divAux'>
                    <label htmlFor="senha">Senha</label>
                    <input type="password" id="senha" name="senha" />
                </div>
                <div className='divAux'>
                    <label htmlFor="telefone">Telefone</label>
                    <input type="text" id="telefone" name="telefone" />
                </div>
                <div className='divAux'>
                    <label htmlFor="data_nascimento">Data de Nascimento</label>
                    <input type="date" id="data_nascimento" name="data_nascimento" />
                </div>
                <button type="submit">Cadastrar</button>
            </form>

        </div>
    )
    async function handleSubmit (submit) {
        submit.preventDefault();
        const formData = new FormData(submit.target);
        const dados = {
            nome: formData.get("name"),
            email: formData.get("email"),
            gender: formData.get("genero"),
            cpf: formData.get("cpf").replace(/\D/g, ''),
            senha: formData.get("senha"),
            telefone: formData.get("telefone").replace(/\D/g, ''),
            tipo_convite:tipo_convite,
            data_nascimento: formData.get("data_nascimento"),
            id_ticket_price:1,
            ArrayProdutos:[{
                id:convite.id,
                enty_type:'personal',
                quantity:1,
                indentification:{
                    type:'cpf',
                    number:formData.get("cpf").replace(/\D/g, '')
                }         
            }]
        };
       const result = await Cadastrar(dados);
       if (result.code === 200  || result.code === 201) {
           window.open(result.link, '_blank', 'noopener,noreferrer');
       }
    }
}