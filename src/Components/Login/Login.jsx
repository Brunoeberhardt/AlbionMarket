import { FaUser, FaLock } from "react-icons/fa";

import { useState, useTransition } from "react";

import "./Login.css"

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    //Função para envio de formulário sem recarregar a página
    const handleSubmit = (event) => {
        event.preventDefault();

         
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="input-field">
                    <input type="email" placeholder='E-mail'
                    onChange={(e) => setUsername(e.target.value)} />
                    <FaUser className="icon" />
                </div>
                <div className="input-field">
                    <input type="password" placeholder='Senha'
                    onChange={(e) => setPassword(e.target.value)} />
                    <FaLock className="icon" />
                </div>

                <div className="recall-forget">
                    <label>
                        <input type="checkbox" />
                        Lembre de mim
                    </label>
                    <a href="#">Esqueceu a senha?</a>
                </div>
                <button >Entrar</button>

                <div className="signup-link">
                    <p>Não tem uma conta? <a href="#">Registrar!</a></p>
                </div>
            </form>
        </div>
    );
}

export default Login;
