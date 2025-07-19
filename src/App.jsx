import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Orcamento from './pages/Orcamento';
import EducacaoFinanceira from './pages/EducacaoFinanceira';
import Metas from './pages/Metas';
import Dividas from './pages/Dividas';
import Investimentos from './pages/Investimentos';
import Relatorios from './pages/Relatorios';
import Calculadora from './pages/Calculadora';
import Configuracoes from './pages/Configuracoes';

// Crie um componente para lidar com autenticação de login
function AppWrapper() {
  const [logado, setLogado] = useState(false);

  return (
    <Router>
      <AppRoutes logado={logado} setLogado={setLogado} />
    </Router>
  );
}

function AppRoutes({ logado, setLogado }) {
  const location = useLocation();

  // Esconde a Sidebar se estiver na rota de login
  const hideSidebar = location.pathname === '/login';

  // Qualquer rota que não seja login e o usuário não está logado => manda para login
  if (!logado && location.pathname !== '/login') {
    return <Navigate to="/login" />;
  }

  // Se já está logado e tenta acessar login, redireciona para dashboard
  if (logado && location.pathname === '/login') {
    return <Navigate to="/" />;
  }

  return (
    <>
      {!hideSidebar && <Sidebar />}
      <Routes>
        <Route path="/login" element={<Login onLogin={() => setLogado(true)} />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/orcamento" element={<Orcamento />} />
        <Route path="/educacao" element={<EducacaoFinanceira />} />
        <Route path="/metas" element={<Metas />} />
        <Route path="/dividas" element={<Dividas />} />
        <Route path="/investimentos" element={<Investimentos />} />
        <Route path="/relatorios" element={<Relatorios />} />
        <Route path="/calculadora" element={<Calculadora />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
        {/* Rota coringa: qualquer coisa errada vai pro dashboard ou login */}
        <Route path="*" element={logado ? <Navigate to="/" /> : <Navigate to="/login" />} />
      </Routes>
    </>
  );
}

export default AppWrapper;
