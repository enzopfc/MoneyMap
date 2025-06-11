import React from 'react';

const Relatorios = () => {
  return (
    <div style={{ marginLeft: '230px', padding: '40px 30px 30px 30px', minHeight: '100vh' }}>
      <h1>Relatórios Financeiros</h1>
      <p style={{ color: "#a0a0a0" }}>Baixe seus relatórios de receitas, despesas e investimentos.</p>
      <button>Exportar em PDF</button>
      <button style={{ marginLeft: 10 }}>Exportar em Excel</button>
    </div>
  );
};

export default Relatorios;
