import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin && onLogin();
    toast.success("Login realizado com sucesso!", {
      position: "top-center",
      autoClose: 1200,
      theme: "dark",
      hideProgressBar: true,
    });
    setTimeout(() => navigate("/"), 1100);
  };

  return (
    <div className="login-fullscreen">
      <ToastContainer />
      <div className="login-content">
        <img src="/moneymap-logo.png" alt="Logo MoneyMap" className="logo-login-lg" />
        <h1 className="login-title">
          Bem-vindo ao <span className="login-blur">MoneyMap</span>
        </h1>
        <p className="login-sub">Seu futuro financeiro começa aqui.</p>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="login-input-wrap">
            <FaEnvelope className="login-input-icon" />
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="login-input-wrap">
            <FaLock className="login-input-icon" />
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">Entrar</button>
        </form>
        <div className="login-footer">
          Esqueceu a senha? <a href="#">Recuperar</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
