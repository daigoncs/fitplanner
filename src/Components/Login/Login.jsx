
import { FaUser, FaLock } from "react-icons/fa"

const Login = () => {
  return (
    <div className="container">
        <form action="">
            <div className="logo">
                
            </div>
            <div>
                <FaUser />
                <input type="email" placeholder="E-mail"/>
            </div>
            <div>
                <FaLock />
                <input type="password" placeholder="Senha" />
            </div>
            <div>
                <button>Entrar</button>
            </div>
            <div>
                Não possui cadastro? 
                <button>Criar conta</button>
            </div>
            <div>
                <button>Esqueceu a senha?</button>
            </div>
        </form>
    </div>
  )
}

export default Login
