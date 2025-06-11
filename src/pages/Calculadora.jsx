import React, { useState } from 'react';

const Calculadora = () => {
  const [tipo, setTipo] = useState('juros');
  const [valor, setValor] = useState('');
  const [taxa, setTaxa] = useState('');
  const [periodo, setPeriodo] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcular = (e) => {
    e.preventDefault();
    if (tipo === 'juros') {
      const r = Number(valor) * Math.pow(1 + Number(taxa) / 100, Number(periodo));
      setResultado('Valor futuro: R$ ' + r.toFixed(2));
    } else {
      setResultado('Função não implementada ainda.');
    }
  };

  return (
    <div style={{ marginLeft: '230px', padding: '40px 30px 30px 30px', minHeight: '100vh' }}>
      <h1>Calculadora Financeira</h1>
      <form onSubmit={calcular} style={{ background: "#181c21", padding: 20, borderRadius: 12, maxWidth: 400 }}>
        <label>Tipo:</label>
        <select value={tipo} onChange={e => setTipo(e.target.value)}>
          <option value="juros">Juros Compostos</option>
        </select><br />
        <label>Valor Inicial (R$):</label>
        <input type="number" value={valor} onChange={e => setValor(e.target.value)} /><br />
        <label>Taxa (%) ao mês:</label>
        <input type="number" value={taxa} onChange={e => setTaxa(e.target.value)} /><br />
        <label>Período (meses):</label>
        <input type="number" value={periodo} onChange={e => setPeriodo(e.target.value)} /><br />
        <button type="submit" style={{ marginTop: 10 }}>Calcular</button>
      </form>
      {resultado && <div style={{ marginTop: 18, color: "#00b4d8" }}>{resultado}</div>}
    </div>
  );
};

export default Calculadora;
