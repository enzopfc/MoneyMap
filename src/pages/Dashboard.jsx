import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div style={{ marginLeft: '230px', padding: '40px 30px 30px 30px', minHeight: "100vh" }}>
      <h1 style={{ letterSpacing: 1 }}>Bem-vindo ao <span style={{ color: "#00b4d8" }}>MoneyMap</span></h1>
      <div className="cards">
        <div className="card">
          <span style={{ fontSize: 32, color: "#00d99e" }}>R$ 4.200,00</span>
          <p style={{ margin: 8, color: "#a0a0a0" }}>Saldo Atual</p>
        </div>
        <div className="card">
          <span style={{ fontSize: 22, color: "#e6d700" }}>R$ 850,00</span>
          <p style={{ margin: 8, color: "#a0a0a0" }}>Gastos Recentes</p>
        </div>
        <div className="card">
          <span style={{ fontSize: 22, color: "#00b4d8" }}>R$ 30.000,00</span>
          <p style={{ margin: 8, color: "#a0a0a0" }}>Meta: Aposentadoria</p>
        </div>
      </div>
      <div style={{ marginTop: 48, fontSize: 17, color: "#a0a0a0" }}>
        <strong>Dica:</strong> Acompanhe seu orçamento e metas na aba lateral para turbinar seu controle financeiro.
      </div>
    </div>
  );
};

export default Dashboard;
