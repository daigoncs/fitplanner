import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const navigate = useNavigate();

  const cadastrar = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      navigate("/dashboard");
    } catch (error) {
    ("Erro ao cadastrar: " + error.messege);
    }
  };

return (
  <form onSubmit={cadastrar}>
    <input type="name" placeholder="Nome completo" value={name} onChange={(e) => setName(e.target.value)} required />
    <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
    <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Confirmar Senha"
        value={confirmarSenha}
        onChange={(e) => setConfirmarSenha(e.target.value)}
        required
      />
      <button type="submit">Cadastrar</button>
  </form>
)
}

export default Register;