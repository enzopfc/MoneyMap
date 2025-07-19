import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
    toast.success("Login realizado com sucesso!", {
      position: "top-center",
      autoClose: 2000, // fecha sozinho em 2 segundos
      theme: "dark",
      hideProgressBar: true,
    });
    setTimeout(() => {
      navigate("/");
    }, 1800); // dá tempo do toast aparecer antes de ir pra home
  };

  return (
    <div className="login-bg-bling">
      <ToastContainer />
      <div className="login-glass-card">
        <img
          src="/moneymap-logo.png"
          alt="Logo MoneyMap"
          className="logo-login"
        />
        <h2>
          Bem-vindo ao <span className="bling">MoneyMap</span>
        </h2>
        <p className="subtitle">Seu futuro financeiro começa aqui.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoFocus
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <button type="submit">Entrar</button>
        </form>
        <div className="login-footer">
          <span>
            Esqueceu a senha? <a href="#">Recuperar</a>
          </span>
        </div>
      </div>
      <div className="login-glow"></div>
    </div>
  );
};

export default Login;
