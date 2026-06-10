import React from 'react';
import './App.css';

function App() {
  const topics = [
    { title: "Procesos de Markov", description: "Análisis de sistemas estocásticos y transiciones de estado a lo largo del tiempo.", icon: "🔄" },
    { title: "Simulación", description: "Modelado computacional para predecir y entender el comportamiento de sistemas complejos.", icon: "🖥️" },
    { title: "Filas de Espera", description: "Teoría de colas para optimizar el flujo y reducir tiempos de espera en sistemas de servicio.", icon: "⏳" },
    { title: "Proyectos (PERT - CPM)", description: "Planificación y control de proyectos mediante análisis de caminos críticos y tiempos.", icon: "📊" },
  ];

  return (
    <div className="app-container">
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      
      <header className="header">
        <img src="/utn-logo.jpg" alt="UTN Logo" className="logo" />
        <div className="header-text">
          <h1>Trabajo Práctico</h1>
          <h2>Investigación Operativa</h2>
        </div>
      </header>

      <main className="main-content">
        <section className="intro">
          <p className="subtitle">Exploración interactiva de modelos matemáticos y algoritmos de optimización.</p>
        </section>

        <section className="topics-grid">
          {topics.map((topic, index) => (
            <div className="topic-card" key={index} style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="topic-icon">{topic.icon}</div>
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
              <button className="enter-btn">Explorar</button>
            </div>
          ))}
        </section>
      </main>

      <footer className="footer">
        <p>Integrantes:</p>
        <p className="integrantes">Santiago Greco</p>
      </footer>
    </div>
  );
}

export default App;
