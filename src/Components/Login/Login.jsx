
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { auth } from "../../src/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    const logar = async (e) =>{
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, senha);
            navigate("/dashboard");
        } catch (error) {
            alert("Erro ao fazer login" + error.message);
        }
    };

  return (
        <form onSubmit={logar}>
            <div className="logo">  
            </div>

            <div>
                <FaUser />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="E-mail"/>
            </div>
            <div>
                <FaLock />
                <input type="password" value={senha} onChange={e => setSenha(e.target.value)} placeholder="Senha" />
            </div>
            <div>
                <button type="submit">Entrar</button>
            </div>
            <div>
                <p>
                Não possui cadastro?  <a href="/register">Criar conta</a>
                </p>
            </div>
        </form>
  )
}

export default Login
