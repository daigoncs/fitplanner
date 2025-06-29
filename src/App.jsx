import { Route, Router, Routes } from "react-router-dom";
import "./App.css"
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import Register from "./Components/Cadastro/Cadastro";
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
