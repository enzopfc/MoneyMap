import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import './Dashboard.css';

// DADOS EXEMPLO
const dadosPizza = [
  { name: 'Alimentação', value: 600 },
  { name: 'Transporte', value: 350 },
  { name: 'Lazer', value: 250 },
  { name: 'Outros', value: 150 },
];
const cores = ['#00eaff', '#ffe600', '#ff7a7a', '#a678ff'];

export default function Dashboard() {
  const nome = "Enzo";
  const hora = new Date().getHours();
  const saudacao = hora < 12 ? "Bom dia" : hora < 18 ? "Boa tarde" : "Boa noite";
  const dicas = [
    "Guarde pelo menos 10% do seu salário.",
    "Evite compras por impulso.",
    "Use o MoneyMap para acompanhar metas!"
  ];
  const dicaDoDia = dicas[new Date().getDay() % dicas.length];

  return (
    <div className="dashboard-main">
      <div className="dashboard-topo">
        <div className="dashboard-saudacao">
          <div className="avatar-mini">
            <img src="/moneymap-logo.png" alt="avatar" />
          </div>
          <div>
            <h2>{saudacao}, <span style={{ color: "#00eaff" }}>{nome}</span>!</h2>
            <span className="dashboard-premium">MoneyMap Premium</span>
          </div>
        </div>
        <div className="dashboard-atalhos">
          <button className="btn-atalho">+ Adicionar gasto</button>
          <button className="btn-atalho">+ Nova meta</button>
          <button className="btn-atalho">+ Novo investimento</button>
        </div>
      </div>

      <div className="dashboard-cards">
        <div className="card card-shadow">
          <div className="card-titulo">Saldo Atual</div>
          <div className="card-valor saldo">R$ 4.200,00</div>
        </div>
        <div className="card card-shadow">
          <div className="card-titulo">Gastos Recentes</div>
          <div className="card-valor gasto">R$ 850,00</div>
        </div>
        <div className="card card-shadow">
          <div className="card-titulo">Meta: Aposentadoria</div>
          <div className="card-valor meta">R$ 30.000,00</div>
          <div className="meta-barra">
            <div className="meta-barra-progresso" style={{ width: "68%" }}></div>
          </div>
          <div className="meta-perc">68% atingido</div>
        </div>
      </div>

      <div className="dashboard-grid">
        {/* GRÁFICO DE PIZZA RECHARTS */}
        <div className="card card-shadow">
          <div className="card-titulo">Distribuição de Gastos</div>
          <div className="pizza-container">
            <ResponsiveContainer width="100%" height={160}>
              <PieChart>
                <Pie
                  data={dadosPizza}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={38}
                  outerRadius={60}
                  paddingAngle={4}
                  label={({ name }) => name}
                >
                  {dadosPizza.map((entry, idx) => (
                    <Cell key={idx} fill={cores[idx % cores.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ULTIMAS MOVIMENTAÇÕES */}
        <div className="card card-shadow ultimas-mov">
          <div className="card-titulo">Últimas Movimentações</div>
          <ul className="ultimas-lista">
            <li className="entrada"><span className="mov-data">12/07</span> <span className="mov-cat">Salário</span> <span className="mov-valor">+ R$ 2500,00</span></li>
            <li className="saida"><span className="mov-data">12/07</span> <span className="mov-cat">Supermercado</span> <span className="mov-valor">- R$ 150,00</span></li>
            <li className="saida"><span className="mov-data">10/07</span> <span className="mov-cat">Transporte</span> <span className="mov-valor">- R$ 35,00</span></li>
            <li className="saida"><span className="mov-data">09/07</span> <span className="mov-cat">Investimento</span> <span className="mov-valor">- R$ 500,00</span></li>
            <li className="entrada"><span className="mov-data">08/07</span> <span className="mov-cat">Renda extra</span> <span className="mov-valor">+ R$ 120,00</span></li>
          </ul>
        </div>

        {/* DICA E ALERTA */}
        <div className="card card-shadow dicas-carousel">
          <div className="card-titulo">💡 Dica de Educação Financeira</div>
          <div className="dica-txt">{dicaDoDia}</div>
        </div>

        {/* INDICADORES */}
        <div className="card card-shadow indicadores">
          <div className="card-titulo">Indicadores-Chave</div>
          <div className="indicador-txt">Maior gasto: Alimentação</div>
          <div className="indicador-txt">Dias sem gastar: 4</div>
        </div>

        {/* ALERTA */}
        <div className="card card-shadow alertas">
          <span className="alerta-badge">Atenção</span>
          Você já gastou 80% do seu orçamento em <b>Alimentação</b> este mês!
        </div>
      </div>
    </div>
  );
}
