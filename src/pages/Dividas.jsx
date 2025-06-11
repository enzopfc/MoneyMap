import React, { useState } from 'react';

const Dividas = () => {
  const [dividas, setDividas] = useState([]);
  const [desc, setDesc] = useState('');
  const [valor, setValor] = useState('');
  const [venc, setVenc] = useState('');

  const adicionarDivida = (e) => {
    e.preventDefault();
    if (desc && valor && venc) {
      setDividas([...dividas, { desc, valor, venc }]);
      setDesc(''); setValor(''); setVenc('');
    }
  };

  return (
    <div style={{ marginLeft: '230px', padding: '40px 30px 30px 30px', minHeight: '100vh' }}>
      <h1>Gestão de Dívidas</h1>
      <form onSubmit={adicionarDivida} style={{ background: "#181c21", padding: 20, borderRadius: 12, maxWidth: 400 }}>
        <label>Descrição:</label><br />
        <input value={desc} onChange={e => setDesc(e.target.value)} /><br />
        <label>Valor (R$):</label><br />
        <input type="number" value={valor} onChange={e => setValor(e.target.value)} /><br />
        <label>Vencimento:</label><br />
        <input type="date" value={venc} onChange={e => setVenc(e.target.value)} /><br />
        <button type="submit" style={{ marginTop: 15 }}>Adicionar</button>
      </form>
      <ul style={{ marginTop: 25 }}>
        {dividas.map((d, i) => (
          <li key={i} style={{ marginBottom: 9 }}>
            <span style={{ color: "#00d99e", fontWeight: "bold" }}>{d.desc}</span> - R$ {d.valor} | <span style={{ color: "#e6d700" }}>{d.venc}</span>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: 20, color: "#a0a0a0", maxWidth: 500 }}>
        <strong>Método "Bola de Neve":</strong> foque em quitar primeiro as menores dívidas.<br />
        <strong>Método "Avalanche":</strong> foque em quitar as de maior juros.
      </div>
    </div>
  );
};

export default Dividas;
