import React from "react";
import {
  PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip
} from "recharts";
import { FaPiggyBank, FaBolt, FaFire, FaArrowUp, FaArrowDown, FaCrown, FaRegBell } from "react-icons/fa";
import "./Dashboard.css";

// DADOS EXEMPLO
const gastosPorCategoria = [
  { name: "Alimentação", value: 700, color: "#00eaff" },
  { name: "Transporte", value: 300, color: "#ffd600" },
  { name: "Lazer", value: 200, color: "#ff396f" },
  { name: "Educação", value: 400, color: "#61f39c" },
  { name: "Outros", value: 150, color: "#7289da" }
];

const ultimasMovs = [
  { data: "13/07", cat: "Salário", valor: "+2500", tipo: "entrada" },
  { data: "12/07", cat: "Supermercado", valor: "-150", tipo: "saida" },
  { data: "10/07", cat: "Transporte", valor: "-35", tipo: "saida" },
  { data: "10/07", cat: "Investimento", valor: "+500", tipo: "entrada" },
  { data: "09/07", cat: "Extra", valor: "+120", tipo: "entrada" },
];

const metas = [
  { nome: "Aposentadoria", valor: 30000, progresso: 68, cor: "#00eaff" },
  { nome: "Reserva Emergência", valor: 12000, progresso: 40, cor: "#ffd600" }
];

const comparativo = [
  { mes: "Jun", entrada: 3900, saida: 2700 },
  { mes: "Jul", entrada: 4200, saida: 2950 }
];

const dicas = [
  "Guarde pelo menos 10% do que você ganha, SEM FALHAR!",
  "Evite compras por impulso. Espere 24h antes de gastar!",
  "Use o MoneyMap todo dia. Controle = Sucesso.",
  "Negocie descontos em pagamentos à vista.",
];

export default function Dashboard() {
  // Escolhe dica aleatória só pra deixar legal
  const dica = dicas[Math.floor(Math.random() * dicas.length)];
  const hora = new Date().getHours();
  const saudacao = hora < 12 ? "Bom dia" : hora < 18 ? "Boa tarde" : "Boa noite";

  // Para animar a barra das metas
  const renderBarra = (progresso, cor) => (
    <div className="meta-barra">
      <div className="meta-barra-progresso" style={{ width: `${progresso}%`, background: cor }}></div>
    </div>
  );

  // Cor do gráfico pizza
  const pieColors = gastosPorCategoria.map(cat => cat.color);

  return (
    <div className="dashboard-moneymap">
      {/* TOPO */}
      <div className="mm-topo">
        <div className="mm-hello">
          <FaCrown className="icon-crown" />
          <span>{saudacao},</span>
          <span className="nome-usuario">Enzo</span>
          <span className="tag-premium">MoneyMap Premium</span>
        </div>
        <div className="mm-atalhos">
          <button className="btn-atalho"><FaArrowDown /> Adicionar gasto</button>
          <button className="btn-atalho"><FaPiggyBank /> Nova meta</button>
          <button className="btn-atalho"><FaArrowUp /> Novo investimento</button>
        </div>
      </div>

      {/* LINHA DE CARDS */}
      <div className="mm-cards">
        <div className="mm-card shadow saldo">
          <div className="card-icon-wrap"><FaPiggyBank /></div>
          <div className="titulo">Saldo Atual</div>
          <div className="valor">R$ 4.200,00</div>
        </div>
        <div className="mm-card shadow gastos">
          <div className="card-icon-wrap"><FaBolt /></div>
          <div className="titulo">Gastos Recentes</div>
          <div className="valor">R$ 850,00</div>
        </div>
        {/* Metas como carrossel */}
        {metas.map((meta) => (
          <div className="mm-card shadow meta" key={meta.nome}>
            <div className="card-icon-wrap"><FaFire /></div>
            <div className="titulo">Meta: {meta.nome}</div>
            <div className="valor">R$ {meta.valor.toLocaleString()}</div>
            {renderBarra(meta.progresso, meta.cor)}
            <span className="meta-perc">{meta.progresso}% atingido</span>
          </div>
        ))}
      </div>

      {/* GRID PRINCIPAL */}
      <div className="mm-grid">
        {/* Gráfico Pizza */}
        <div className="mm-grid-card pizza">
          <div className="card-title">Distribuição dos Gastos</div>
          <ResponsiveContainer width="100%" height={160}>
            <PieChart>
              <Pie data={gastosPorCategoria} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={62} innerRadius={38}>
                {gastosPorCategoria.map((entry, idx) => (
                  <Cell key={entry.name} fill={pieColors[idx]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="legenda-pizza">
            {gastosPorCategoria.map(cat =>
              <span key={cat.name}><span className="dot-legenda" style={{background: cat.color}}></span>{cat.name}</span>
            )}
          </div>
        </div>
        {/* Últimas Movimentações */}
        <div className="mm-grid-card ultimas">
          <div className="card-title">Últimas Movimentações</div>
          <ul className="ultimas-lista">
            {ultimasMovs.map((mov, idx) =>
              <li key={idx}>
                <span className="mov-data">{mov.data}</span>
                <span className="mov-cat">{mov.cat}</span>
                <span className={mov.tipo === "entrada" ? "mov-entrada" : "mov-saida"}>
                  {mov.valor}
                </span>
              </li>
            )}
          </ul>
        </div>
        {/* Dica do dia/Carrossel */}
        <div className="mm-grid-card dica-dia">
          <FaRegBell className="icon-dica" />
          <div className="card-title">Dica do Dia</div>
          <div className="dica-txt">{dica}</div>
        </div>
      </div>

      {/* Segunda linha */}
      <div className="mm-row">
        {/* Comparativo Mensal */}
        <div className="mm-card shadow comparativo">
          <div className="card-title">Comparativo Mensal</div>
          <ResponsiveContainer width="98%" height={85}>
            <BarChart data={comparativo}>
              <XAxis dataKey="mes" stroke="#ccc" />
              <YAxis hide />
              <Tooltip />
              <Bar dataKey="entrada" fill="#00eaff" radius={5} />
              <Bar dataKey="saida" fill="#ff396f" radius={5} />
            </BarChart>
          </ResponsiveContainer>
          <span className="comparativo-label">
            <FaArrowUp style={{color:"#ff396f",marginRight:5}} />
            +15% em relação ao mês anterior
          </span>
        </div>
        {/* Alerta Inteligente */}
        <div className="mm-card shadow alerta">
          <span className="alerta-badge">Atenção</span>
          Você já gastou <b>80%</b> do seu orçamento em <b>Alimentação</b> este mês!
        </div>
        {/* Cards-chave */}
        <div className="mm-card shadow indicador">
          <div className="indicador-txt">
            <FaBolt style={{color:"#ffd600",marginRight:8}} /> Categoria que mais cresceu: <b>Lazer</b>
          </div>
          <div className="indicador-txt">
            <FaArrowDown style={{color:"#00eaff",marginRight:8}} /> Dias sem gastar: <b>4</b>
          </div>
          <div className="indicador-txt">
            <FaArrowUp style={{color:"#ff396f",marginRight:8}} /> Categoria com maior gasto: <b>Alimentação</b>
          </div>
        </div>
      </div>
    </div>
  );
}
