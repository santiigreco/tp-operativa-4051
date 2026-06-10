import React from 'react';
import './App.css';

function App() {


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



      <footer className="footer">
        <p>Integrantes:</p>
        <p className="integrantes">Santiago Greco</p>
      </footer>
    </div>
  );
}

export default App;
