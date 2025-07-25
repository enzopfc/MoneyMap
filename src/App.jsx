import React, { useState, useEffect } from 'react';
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

// Wrapper para usar useLocation com rotas
function AppWrapper() {
  const [logado, setLogado] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    setLogado(auth === "true");
  }, []);

  return (
    <Router>
      <AppRoutes logado={logado} setLogado={setLogado} />
    </Router>
  );
}

// Lógica das rotas
function AppRoutes({ logado, setLogado }) {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      {!isLoginPage && <Sidebar />}
      <div className={`flex-1 ${!isLoginPage ? 'p-6' : ''}`}>
        <Routes>
          <Route path="/login" element={<Login setLogado={setLogado} />} />
          <Route path="/" element={logado ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/orcamento" element={logado ? <Orcamento /> : <Navigate to="/login" />} />
          <Route path="/educacao" element={logado ? <EducacaoFinanceira /> : <Navigate to="/login" />} />
          <Route path="/metas" element={logado ? <Metas /> : <Navigate to="/login" />} />
          <Route path="/dividas" element={logado ? <Dividas /> : <Navigate to="/login" />} />
          <Route path="/investimentos" element={logado ? <Investimentos /> : <Navigate to="/login" />} />
          <Route path="/relatorios" element={logado ? <Relatorios /> : <Navigate to="/login" />} />
          <Route path="/calculadora" element={logado ? <Calculadora /> : <Navigate to="/login" />} />
          <Route path="/configuracoes" element={logado ? <Configuracoes /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </div>
  );
}

export default AppWrapper;
