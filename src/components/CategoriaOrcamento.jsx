import React, { useState } from 'react';
import './CategoriaOrcamento.css';

const CategoriaOrcamento = ({ nome }) => {
  const [valor, setValor] = useState('');
  const [limite, setLimite] = useState('');
  const [alerta, setAlerta] = useState(false);

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
    <div className="categoria-orcamento">
      <h3>{nome}</h3>
      <label>
        Gasto atual (R$):<br />
        <input
          type="number"
          value={valor}
          onChange={handleValorChange}
          className="input-orcamento"
        />
      </label>
      <br />
      <label>
        Limite da categoria (R$):<br />
        <input
          type="number"
          value={limite}
          onChange={handleLimiteChange}
          className="input-orcamento"
        />
      </label>
      {alerta && (
        <p className="alerta-limite">
          ⚠️ Você ultrapassou o limite dessa categoria!
        </p>
      )}
    </div>
  );
};

export default CategoriaOrcamento;
