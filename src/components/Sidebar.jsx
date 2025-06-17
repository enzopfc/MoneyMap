import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="sidebar">
      <img src="/moneymap-logo.png" alt="Logo MoneyMap" className="logo" />
      <nav>
        <ul>
          <li><Link className={location.pathname === "/" ? "active" : ""} to="/">Dashboard</Link></li>
          <li><Link className={location.pathname === "/orcamento" ? "active" : ""} to="/orcamento">Orçamento</Link></li>
          <li><Link className={location.pathname === "/educacao" ? "active" : ""} to="/educacao">Educação Financeira</Link></li>
          <li><Link className={location.pathname === "/metas" ? "active" : ""} to="/metas">Metas</Link></li>
          <li><Link className={location.pathname === "/dividas" ? "active" : ""} to="/dividas">Dívidas</Link></li>
          <li><Link className={location.pathname === "/investimentos" ? "active" : ""} to="/investimentos">Investimentos</Link></li>
          <li><Link className={location.pathname === "/relatorios" ? "active" : ""} to="/relatorios">Relatórios</Link></li>
          <li><Link className={location.pathname === "/calculadora" ? "active" : ""} to="/calculadora">Calculadora</Link></li>
          <li><Link className={location.pathname === "/configuracoes" ? "active" : ""} to="/configuracoes">Configurações</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
