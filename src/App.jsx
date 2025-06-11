import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';

import Dashboard from './pages/Dashboard';
import Orcamento from './pages/Orcamento';
import EducacaoFinanceira from './pages/EducacaoFinanceira';
import Metas from './pages/Metas';
import Dividas from './pages/Dividas';
import Investimentos from './pages/Investimentos';
import Relatorios from './pages/Relatorios';
import Calculadora from './pages/Calculadora';
import Configuracoes from './pages/Configuracoes';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orcamento" element={<Orcamento />} />
        <Route path="/educacao" element={<EducacaoFinanceira />} />
        <Route path="/metas" element={<Metas />} />
        <Route path="/dividas" element={<Dividas />} />
        <Route path="/investimentos" element={<Investimentos />} />
        <Route path="/relatorios" element={<Relatorios />} />
        <Route path="/calculadora" element={<Calculadora />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
      </Routes>
    </Router>
  );
}

export default App;
