import React from 'react';
import CategoriaOrcamento from '../components/CategoriaOrcamento';

const Orcamento = () => {
  const categorias = [
    'Alimentação',
    'Transporte',
    'Lazer',
    'Contas',
    'Saúde',
    'Educação',
    'Investimentos',
    'Outros'
  ];

  return (
    <div style={{ marginLeft: '230px', padding: '40px 30px 30px 30px', minHeight: '100vh' }}>
      <h1>Orçamento Mensal</h1>
      <p style={{ color: "#a0a0a0", marginBottom: 24 }}>Gerencie seus gastos por categoria e veja alertas quando ultrapassar o limite.</p>
      {categorias.map((categoria, idx) => (
        <CategoriaOrcamento key={idx} nome={categoria} />
      ))}
    </div>
  );
};

export default Orcamento;
