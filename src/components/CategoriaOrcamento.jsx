import React, { useState } from 'react';
import { FaWallet, FaExclamationTriangle } from "react-icons/fa";

const CategoriaOrcamento = ({ nome }) => {
  const [valor, setValor] = useState('');
  const [limite, setLimite] = useState('');
  const [alerta, setAlerta] = useState(false);

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
    <div className="relative text-[#e7fcff] mb-7 min-w-[260px] max-w-[370px] px-[25px] pt-8 pb-6 rounded-[20px] border border-[#0096c74d] shadow-[0_6px_36px_#00eaff1a,0_1.5px_12px_#001f2e11] bg-[rgba(21,30,39,0.90)] backdrop-blur-[7px] transition-shadow duration-200 animate-fadeIn">
      <div className="flex items-center gap-2 mb-4">
        <FaWallet className="text-[#00eaff]" />
        <h2 className="text-lg font-semibold">{nome}</h2>
      </div>

      <div className="space-y-3">
        <div>
          <label className="block text-sm mb-1">Valor gasto:</label>
          <input
            type="number"
            value={valor}
            onChange={handleValorChange}
            className="w-full px-3 py-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Limite:</label>
          <input
            type="number"
            value={limite}
            onChange={handleLimiteChange}
            className="w-full px-3 py-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
          <div
            className={`h-full bg-cyan-400 transition-all duration-500`}
            style={{ width: `${calcPorcentagem()}%` }}
          />
        </div>

        {alerta && (
          <div className="flex items-center text-red-500 text-sm mt-2">
            <FaExclamationTriangle className="mr-1" />
            Você ultrapassou o limite!
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriaOrcamento;
