import React from "react";
import "./EducacaoFinanceira.css";
import { FaLightbulb, FaVideo, FaBook, FaChartLine, FaStar, FaRegSmile } from "react-icons/fa";

export default function EducacaoFinanceira() {
  return (
    <div className="educacao-financeira-bg">
      <div className="edu-header">
        <FaLightbulb className="edu-header-icon" />
        <h1>
          Educação <span className="edu-highlight">Financeira</span>
        </h1>
        <span className="edu-premium-badge"><FaStar /> Conteúdo Premium</span>
      </div>

      <div className="edu-row">
        {/* ARTIGOS E DICAS */}
        <div className="edu-card glass">
          <div className="edu-card-title"><FaBook /> Artigos e Dicas</div>
          <ul className="edu-list">
            <li>Como montar uma <b>reserva de emergência</b></li>
            <li>5 erros financeiros que você deve evitar</li>
            <li>Entenda o que é <b>CDI</b>, <b>Selic</b> e <b>inflação</b></li>
            <li>O segredo do <b>Juros Compostos</b></li>
            <li>Como planejar seus objetivos de vida</li>
          </ul>
        </div>

        {/* VÍDEOS */}
        <div className="edu-card glass">
          <div className="edu-card-title"><FaVideo /> Vídeos Recomendados</div>
          <div className="edu-videos">
            <iframe
              src="https://www.youtube.com/embed/LZ6tLqzE7Cw"
              title="Como organizar sua vida financeira"
              allowFullScreen
              loading="lazy"
            />
            <iframe
              src="https://www.youtube.com/embed/B7H_iFheQK0"
              title="Educação Financeira em 5 Minutos"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="edu-row">
        {/* SCORE */}
        <div className="edu-card glass">
          <div className="edu-card-title"><FaChartLine /> Pontuação de Crédito</div>
          <div className="edu-score-bloco">
            <div className="edu-score-bar">
              <div className="edu-score-bar-inner" style={{ width: "780px", maxWidth: "95%" }}></div>
              <div className="edu-score-mark" style={{ left: "61%" }}>
                <span className="edu-score-value">780</span>
                <FaRegSmile />
              </div>
            </div>
            <div className="edu-score-legenda">
              Score ruim <span>0</span>
              <span style={{ marginLeft: "53%" }}>Bom</span>
              <span style={{ marginLeft: "13%" }}>Excelente</span>
              <span>1000</span>
            </div>
          </div>
          <p className="edu-text">
            Seu score (pontuação de crédito) vai de <b>0 a 1000</b> e indica seu histórico financeiro.
            <br />
            Pague contas em dia, não estoure o limite do cartão e evite inadimplência para manter um score alto!
          </p>
        </div>

        {/* DICA EXTRA */}
        <div className="edu-card glass">
          <div className="edu-card-title"><FaLightbulb /> Dica Rápida</div>
          <div className="edu-dica-bloco">
            <span className="edu-dica-badge">#FICAADICA</span>
            <p className="edu-text">
              Cada real investido cedo se multiplica no tempo. <br />
              <b>Disciplina</b>  Quantia! O segredo é <span style={{ color: "#ffe066" }}>consistência</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
