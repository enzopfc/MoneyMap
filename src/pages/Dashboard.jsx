import React, { useEffect, useState } from "react";
import {
  PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip
} from "recharts";
import axios from "axios";
import {
  FaPiggyBank, FaBolt, FaFire, FaArrowUp, FaArrowDown,
  FaCrown, FaRegBell, FaCloudSun, FaCloudRain, FaSun, FaSnowflake, FaCloud, FaSmog, FaMapMarkerAlt
} from "react-icons/fa";
import "./Dashboard.css";
import "./WeatherCard.css";


// --- COMPONENTE PREVISÃO DO TEMPO ----------------------
const CITY = "Engenheiro Coelho";
const API_KEY = "8172ba1121c4e245acc61c46a6128484"; // <<<<<<<<<<<<<<<<<<<<< SUA KEY AQUI!

function getWeatherIcon(main) {
  switch (main) {
    case "Thunderstorm": return <FaCloudRain />;
    case "Drizzle": return <FaCloudRain />;
    case "Rain": return <FaCloudRain />;
    case "Snow": return <FaSnowflake />;
    case "Clear": return <FaSun />;
    case "Clouds": return <FaCloudSun />;
    case "Mist": case "Smoke": case "Haze": case "Fog": return <FaSmog />;
    default: return <FaCloud />;
  }
}

function WeatherCard() {
  const [weather, setWeather] = useState(null);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric&lang=pt_br`
        );
        setWeather(res.data);
      } catch (e) {
        setErro("Não foi possível obter o clima 😔");
      }
    }
    fetchWeather();
  }, []);

  if (erro) return (
    <div className="weather-card erro">
      <span>{erro}</span>
    </div>
  );

  if (!weather) return (
    <div className="weather-card loading">
      <span>Clima...</span>
    </div>
  );

  const { name, main, weather: weatherArr } = weather;
  const clima = weatherArr[0];
  const icon = getWeatherIcon(clima.main);

  return (
    <div className="weather-card glass">
      <div className="weather-topo">
        <span className="city"><FaMapMarkerAlt style={{marginRight: 4}} />{name}</span>
        <span className="icon">{icon}</span>
      </div>
      <div className="temp-atual">{Math.round(main.temp)}<span className="grau">°C</span></div>
      <div className="desc">{clima.description.charAt(0).toUpperCase() + clima.description.slice(1)}</div>
      <div className="sensacao">Sensação: {Math.round(main.feels_like)}°C</div>
    </div>
  );
}
// --- FIM COMPONENTE TEMPO -----------------------------

// DADOS EXEMPLO
const gastosPorCategoria = [
  { name: "Alimentação", value: 700, color: "#00fff7" },
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
  { nome: "Aposentadoria", valor: 30000, progresso: 68, cor: "#00fff7" },
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
  const dica = dicas[Math.floor(Math.random() * dicas.length)];
  const hora = new Date().getHours();
  const saudacao = hora < 12 ? "Bom dia" : hora < 18 ? "Boa tarde" : "Boa noite";

  const renderBarra = (progresso, cor) => (
    <div className="meta-barra">
      <div className="meta-barra-progresso" style={{ width: `${progresso}%`, background: cor }}></div>
    </div>
  );
  const pieColors = gastosPorCategoria.map(cat => cat.color);

  return (
    <div className="dashboard-moneymap animated-in">
      <div className="mm-topo">
        <div className="mm-hello">
          <FaCrown className="icon-crown animate-glow" />
          <span>{saudacao},</span>
          <span className="nome-usuario">Enzo</span>
          <span className="tag-premium">MoneyMap Premium</span>
        </div>
        <div style={{display: "flex", alignItems: "center", gap: "20px"}}>
          <div className="mm-atalhos">
            <button className="btn-atalho animated-btn"><FaArrowDown /> Adicionar gasto</button>
            <button className="btn-atalho animated-btn"><FaPiggyBank /> Nova meta</button>
            <button className="btn-atalho animated-btn"><FaArrowUp /> Novo investimento</button>
          </div>
          <WeatherCard />
        </div>
      </div>
      <div className="mm-cards">
        <div className="mm-card glass saldo animated-card">
          <div className="card-icon-wrap"><FaPiggyBank /></div>
          <div className="titulo">Saldo Atual</div>
          <div className="valor">R$ 4.200,00</div>
        </div>
        <div className="mm-card glass gastos animated-card">
          <div className="card-icon-wrap"><FaBolt /></div>
          <div className="titulo">Gastos Recentes</div>
          <div className="valor">R$ 850,00</div>
        </div>
        {metas.map((meta) => (
          <div className="mm-card glass meta animated-card" key={meta.nome}>
            <div className="card-icon-wrap"><FaFire /></div>
            <div className="titulo">Meta: {meta.nome}</div>
            <div className="valor">R$ {meta.valor.toLocaleString()}</div>
            {renderBarra(meta.progresso, meta.cor)}
            <span className="meta-perc">{meta.progresso}% atingido</span>
          </div>
        ))}
      </div>
      <div className="mm-grid">
        <div className="mm-grid-card pizza animated-card">
          <div className="card-title">Distribuição dos Gastos</div>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie data={gastosPorCategoria} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={64} innerRadius={40}>
                {gastosPorCategoria.map((entry, idx) => (
                  <Cell key={entry.name} fill={pieColors[idx]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ background: "#142437", border: "none", color: "#fff" }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="legenda-pizza">
            {gastosPorCategoria.map(cat =>
              <span key={cat.name}><span className="dot-legenda" style={{ background: cat.color }}></span>{cat.name}</span>
            )}
          </div>
        </div>
        <div className="mm-grid-card ultimas animated-card">
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
        <div className="mm-grid-card dica-dia animated-card">
          <FaRegBell className="icon-dica pulse-glow" />
          <div className="card-title">Dica do Dia</div>
          <div className="dica-txt">{dica}</div>
        </div>
      </div>
      <div className="mm-row">
        <div className="mm-card glass comparativo animated-card">
          <div className="card-title">Comparativo Mensal</div>
          <ResponsiveContainer width="98%" height={85}>
            <BarChart data={comparativo}>
              <XAxis dataKey="mes" stroke="#ccc" />
              <YAxis hide />
              <Tooltip contentStyle={{ background: "#142437", border: "none", color: "#fff" }} />
              <Bar dataKey="entrada" fill="#00eaff" radius={5} />
              <Bar dataKey="saida" fill="#ff396f" radius={5} />
            </BarChart>
          </ResponsiveContainer>
          <span className="comparativo-label">
            <FaArrowUp style={{ color: "#ff396f", marginRight: 5 }} />
            +15% em relação ao mês anterior
          </span>
        </div>
        <div className="mm-card glass alerta animated-card">
          <span className="alerta-badge pulse-alert">Atenção</span>
          Você já gastou <b>80%</b> do seu orçamento em <b>Alimentação</b> este mês!
        </div>
        <div className="mm-card glass indicador animated-card">
          <div className="indicador-txt">
            <FaBolt style={{ color: "#ffd600", marginRight: 8 }} /> Categoria que mais cresceu: <b>Lazer</b>
          </div>
          <div className="indicador-txt">
            <FaArrowDown style={{ color: "#00eaff", marginRight: 8 }} /> Dias sem gastar: <b>4</b>
          </div>
          <div className="indicador-txt">
            <FaArrowUp style={{ color: "#ff396f", marginRight: 8 }} /> Categoria com maior gasto: <b>Alimentação</b>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- CSS do WeatherCard (coloque no seu Dashboard.css ou global) --------
// Cole o CSS abaixo:

/*
.weather-card {
  background: linear-gradient(120deg, #001a2c 70%, #00b4d8 150%);
  color: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 14px #00eaff24, 0 0px 1.5px #00eaff88;
  min-width: 170px;
  max-width: 225px;
  padding: 20px 14px 14px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  animation: fadeInUp .9s cubic-bezier(.4,0,.2,1);
  transition: box-shadow .19s, transform .19s;
}
.weather-card:hover {
  box-shadow: 0 8px 28px #00eaff57, 0 6px 32px #00eaff35;
  transform: translateY(-6px) scale(1.04);
}
.weather-topo {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.01rem;
  font-weight: 700;
  margin-bottom: 8px;
}
.weather-card .icon {
  font-size: 2.3rem;
  color: #ffe066;
  filter: drop-shadow(0 0 8px #fff3);
}
.temp-atual {
  font-size: 2.2rem;
  font-weight: 900;
  color: #00eaff;
  letter-spacing: 2px;
  text-shadow: 0 1px 10px #00eaff4b;
}
.grau {
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffe066;
}
.desc {
  margin-top: 5px;
  font-size: 1.02rem;
  color: #fffbe8;
  text-shadow: 0 1px 7px #00b4d890;
}
.sensacao {
  font-size: 0.94rem;
  color: #c8f3ff;
  margin-top: 6px;
}
.weather-card.loading,
.weather-card.erro {
  background: #10233a;
  color: #ffe066;
  text-align: center;
  font-size: 1.01rem;
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(22px) scale(0.97);}
  to   { opacity: 1; transform: translateY(0) scale(1);}
}
*/

