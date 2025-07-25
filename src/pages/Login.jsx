import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ setLogado }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogado(true);
    localStorage.setItem("auth", "true");

    toast.success("Login realizado com sucesso!", {
      position: "top-center",
      autoClose: 1200,
      theme: "dark",
      hideProgressBar: true,
    });

    setTimeout(() => navigate("/"), 1100);
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center text-white text-center"
         style={{
           background: "radial-gradient(ellipse at 80% 10%, #03bcd1 0%, #02243c 80%)"
         }}>
      <ToastContainer />
      <div className="w-full max-w-[470px] px-6 py-10">

        {/* Logo */}
        <img
          src="/moneymap-logo.png"
          alt="Logo"
          className="w-24 h-24 mb-6 rounded-[18px] bg-white shadow-[0_4px_28px_#00eaff5b] object-contain animate-[logoShow_0.7s_ease-in-out] mx-auto"
        />

        {/* Título */}
        <h1 className="text-[2rem] font-black tracking-wide drop-shadow-[0_2px_24px_#02243c77] mb-1">
          Bem-vindo ao{" "}
          <span className="bg-gradient-to-r from-[#00fff7] via-[#00b4d8] to-[#ffe066] bg-clip-text text-transparent font-bold">
            MoneyMap
          </span>
        </h1>

        <p className="text-[#a0c9de] text-[1.1rem] mb-6">Faça login para continuar</p>

        {/* Formulário */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[350px] flex flex-col gap-5 mb-6 mx-auto"
        >
          <div className="flex items-center bg-[#102c3c] rounded-[13px] shadow-[0_2px_10px_#00b4d82a] px-2">
            <FaEnvelope className="mx-[14px] text-[#00b4d8] text-[1.35em]" />
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 py-[14px] pr-4 text-[1.1rem] font-semibold bg-transparent text-white outline-none placeholder:text-white focus:bg-[#173b4d] transition-colors duration-200"
            />
          </div>

          <div className="flex items-center bg-[#102c3c] rounded-[13px] shadow-[0_2px_10px_#00b4d82a] px-2">
            <FaLock className="mx-[14px] text-[#00b4d8] text-[1.35em]" />
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              className="flex-1 py-[14px] pr-4 text-[1.1rem] font-semibold bg-transparent text-white outline-none placeholder:text-white focus:bg-[#173b4d] transition-colors duration-200"
            />
          </div>

          <button
            type="submit"
            className="mt-1 py-[15px] bg-gradient-to-r from-[#00b4d8] to-[#0096c7] hover:from-[#00d2ff] hover:to-[#00bfae] transform hover:scale-[1.045] transition-all text-white font-extrabold text-[1.1rem] tracking-widest rounded-[13px] shadow-[0_8px_28px_#00b4d844]"
          >
            Entrar
          </button>
        </form>

        <p className="text-[#f6fafb] text-[1rem] opacity-85">
          Esqueceu a senha?
          <a href="#" className="text-[#ffe066] underline font-semibold hover:text-[#fffbe8] ml-1">
            Redefinir
          </a>
        </p>

        <style>
          {`@keyframes logoShow {
            from { opacity: 0; transform: scale(0.8); }
            to { opacity: 1; transform: scale(1); }
          }`}
        </style>
      </div>
    </div>
  );
};

export default Login;
