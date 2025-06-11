import React from 'react';

const EducacaoFinanceira = () => {
  return (
    <div style={{ marginLeft: '230px', padding: '40px 30px 30px 30px', minHeight: '100vh' }}>
      <h1>Educação Financeira</h1>
      <h2 style={{ color: "#00b4d8" }}>Artigos e Dicas</h2>
      <ul>
        <li>Como montar uma reserva de emergência</li>
        <li>5 erros financeiros que você deve evitar</li>
        <li>Entenda o que é CDI, Selic e inflação</li>
      </ul>
      <h2 style={{ color: "#00b4d8" }}>Vídeos Recomendados</h2>
      <div style={{ display: "flex", gap: 30 }}>
        <iframe width="360" height="215" src="https://www.youtube.com/embed/LZ6tLqzE7Cw" title="Como organizar sua vida financeira" frameBorder="0" allowFullScreen></iframe>
        <iframe width="360" height="215" src="https://www.youtube.com/embed/B7H_iFheQK0" title="Educação Financeira em 5 Minutos" frameBorder="0" allowFullScreen></iframe>
      </div>
      <h2 style={{ color: "#00b4d8" }}>Pontuação de Crédito</h2>
      <p>
        Sua pontuação de crédito é uma nota (de 0 a 1000) que indica seu histórico financeiro.<br />
        Manter contas em dia, evitar dívidas e não usar todo o limite do cartão ajuda a manter um bom score.
      </p>
    </div>
  );
};

export default EducacaoFinanceira;
