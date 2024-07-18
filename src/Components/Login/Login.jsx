import { FaUser, FaLock } from "react-icons/fa";

import { useState, useTransition } from "react";
import axios from "axios";
import "./Login.css"

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true); // Mostrar carregamento

        try {
            const response = await axios.post('http://localhost:5000/api/login', {
                username,
                password
            });

            console.log(response.data);


        } catch (error) {
            console.error(error);
            setErrorMessage("Login failed. Please check your username and password.");
        } finally {
            setIsLoading(false); // Ocultar carregamento
        }
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
                <button type="submit">Entrar</button>

                <div className="signup-link">
                    <p>Não tem uma conta? <a href="#">Registrar!</a></p>
                </div>
            </form>
        </div>
    );
}

export default Login;