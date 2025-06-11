import React, { useState } from 'react';

const Metas = () => {
  const [nome, setNome] = useState('');
  const [valorMeta, setValorMeta] = useState('');
  const [valorMes, setValorMes] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularMeta = (e) => {
    e.preventDefault();
    if (valorMeta && valorMes && valorMes > 0) {
      const meses = Math.ceil(Number(valorMeta) / Number(valorMes));
      setResultado(meses);
    } else {
      setResultado(null);
    }
  };

  return (
    <div style={{ marginLeft: '230px', padding: '40px 30px 30px 30px', minHeight: '100vh' }}>
      <h1>Simulador de Metas Financeiras</h1>
      <form onSubmit={calcularMeta} style={{ background: "#181c21", padding: 20, borderRadius: 12, maxWidth: 400 }}>
        <label>Meta (ex: Comprar Carro):</label><br />
        <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome da Meta" /><br />
        <label>Valor da Meta (R$):</label><br />
        <input type="number" value={valorMeta} onChange={e => setValorMeta(e.target.value)} /><br />
        <label>Quanto consegue guardar por mês (R$):</label><br />
        <input type="number" value={valorMes} onChange={e => setValorMes(e.target.value)} /><br />
        <button type="submit" style={{ marginTop: 15 }}>Simular</button>
      </form>
      {resultado && (
        <div style={{ marginTop: 22, color: "#00b4d8" }}>
          <strong>{nome ? nome : "Sua meta"}</strong> será atingida em <strong>{resultado} meses</strong>!
        </div>
      )}
    </div>
  );
};

export default Metas;
