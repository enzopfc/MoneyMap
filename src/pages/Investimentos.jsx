import React, { useState } from 'react';

const opcoes = [
  { nome: "Poupança", risco: "Baixo", retorno: "0,7% ao mês" },
  { nome: "CDB", risco: "Médio", retorno: "1% ao mês" },
  { nome: "Tesouro Direto", risco: "Baixo", retorno: "1,1% ao mês" },
  { nome: "Ações", risco: "Alto", retorno: "3% ao mês" }
];

const Investimentos = () => {
  const [perfil, setPerfil] = useState("Baixo");

  return (
    <div style={{ marginLeft: '230px', padding: '40px 30px 30px 30px', minHeight: '100vh' }}>
      <h1>Investimentos</h1>
      <label>Seu perfil de risco: </label>
      <select value={perfil} onChange={e => setPerfil(e.target.value)}>
        <option value="Baixo">Conservador</option>
        <option value="Médio">Moderado</option>
        <option value="Alto">Agressivo</option>
      </select>
      <div style={{ marginTop: 30 }}>
        <h3>Sugestões:</h3>
        <ul>
          {opcoes.filter(o => 
            perfil === "Alto" ? true : o.risco !== "Alto" || perfil === o.risco
          ).map((o, i) => (
            <li key={i}>
              <strong>{o.nome}</strong> — {o.retorno} | Risco: {o.risco}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Investimentos;
