import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaPiggyBank, FaGraduationCap, FaBullseye, FaWallet, FaChartPie, FaCalculator, FaCog } from "react-icons/fa";
import "./Sidebar.css";

export default function Sidebar() {
  const location = useLocation();
  const userName = "Enzo";

  // Só para mobile depois, mas já deixo pronto se quiser esconder via botão
  // const [open, setOpen] = useState(false);

  return (
    <div className="sidebar">
      <div className="sidebar-topo">
        <img src="/moneymap-logo.png" alt="Logo" className="sidebar-logo" />
        <div className="sidebar-title">
          <span>MoneyMap</span>
        </div>
      </div>
      <div className="sidebar-user">
        <div className="sidebar-avatar">{userName.charAt(0)}</div>
        <div className="sidebar-username">{userName}</div>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              <FaHome /> <span className="sidebar-text">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/orcamento" className={location.pathname === "/orcamento" ? "active" : ""}>
              <FaPiggyBank /> <span className="sidebar-text">Orçamento</span>
            </Link>
          </li>
          <li>
            <Link to="/educacao" className={location.pathname === "/educacao" ? "active" : ""}>
              <FaGraduationCap /> <span className="sidebar-text">Educação</span>
            </Link>
          </li>
          <li>
            <Link to="/metas" className={location.pathname === "/metas" ? "active" : ""}>
              <FaBullseye /> <span className="sidebar-text">Metas</span>
            </Link>
          </li>
          <li>
            <Link to="/dividas" className={location.pathname === "/dividas" ? "active" : ""}>
              <FaWallet /> <span className="sidebar-text">Dívidas</span>
            </Link>
          </li>
          <li>
            <Link to="/investimentos" className={location.pathname === "/investimentos" ? "active" : ""}>
              <FaChartPie /> <span className="sidebar-text">Investimentos</span>
            </Link>
          </li>
          <li>
            <Link to="/calculadora" className={location.pathname === "/calculadora" ? "active" : ""}>
              <FaCalculator /> <span className="sidebar-text">Calculadora</span>
            </Link>
          </li>
          <li>
            <Link to="/configuracoes" className={location.pathname === "/configuracoes" ? "active" : ""}>
              <FaCog /> <span className="sidebar-text">Configurações</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
