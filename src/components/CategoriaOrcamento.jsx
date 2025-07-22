import React, { useState } from 'react';
import { FaWallet, FaExclamationTriangle } from "react-icons/fa";
import './CategoriaOrcamento.css';

const CategoriaOrcamento = ({ nome }) => {
  const [valor, setValor] = useState('');
  const [limite, setLimite] = useState('');
  const [alerta, setAlerta] = useState(false);

  // Porcentagem atingida para a barra de progresso
  const calcPorcentagem = () => {
    if (!limite || Number(limite) === 0) return 0;
    return Math.min(100, ((Number(valor) / Number(limite)) * 100).toFixed(0));
  };

  const handleValorChange = (e) => {
    const novoValor = Number(e.target.value);
    setValor(novoValor);
    setAlerta(novoValor > limite && limite !== '');
  };

  const handleLimiteChange = (e) => {
    const novoLimite = Number(e.target.value);
    setLimite(novoLimite);
    setAlerta(valor > novoLimite && novoLimite !== '');
  };

  return (
    <div className="categoria-orcamento-glass">
      <div className="orcamento-header">
        <FaWallet className="orcamento-icone" />
        <h3>{nome}</h3>
      </div>
      <div className="orcamento-inputs">
        <label>
          <span>Gasto atual (R$):</span>
          <input
            type="number"
            min="0"
            value={valor}
            onChange={handleValorChange}
            className="input-orcamento"
            placeholder="Ex: 200"
          />
        </label>
        <label>
          <span>Limite da categoria (R$):</span>
          <input
            type="number"
            min="0"
            value={limite}
            onChange={handleLimiteChange}
            className="input-orcamento"
            placeholder="Ex: 400"
          />
        </label>
      </div>

      {/* Barra de progresso animada */}
      <div className="barra-progresso-premium">
        <div
          className={
            alerta
              ? "progresso-barra alerta-premium"
              : "progresso-barra"
          }
          style={{
            width: `${calcPorcentagem()}%`,
            background: alerta
              ? "linear-gradient(90deg,#ff6161 60%,#ffb56b 100%)"
              : "linear-gradient(90deg,#00fff7 60%,#00b4d8 100%)",
          }}
        />
      </div>
      <div className="barra-info">
        <span>{calcPorcentagem()}% do limite usado</span>
        <span>
          R$ {valor || 0} / R$ {limite || 0}
        </span>
      </div>

      {alerta && (
        <div className="alerta-limite-premium">
          <FaExclamationTriangle />
          <span>Você ultrapassou o limite dessa categoria!</span>
        </div>
      )}
    </div>
  );
};

export default CategoriaOrcamento;
<div className="cards-categorias">
  <CategoriaOrcamento nome="Alimentação" />
  <CategoriaOrcamento nome="Lazer" />
  <CategoriaOrcamento nome="Transporte" />
</div>
