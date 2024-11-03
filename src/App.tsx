import React from 'react';
import './App.css';
import Cotizacion from './components/cotizacion'; // Importa el componente `cotizacion`

const App: React.FC = () => {
    return (
        <div className="App">
            <Cotizacion /> {/* Renderiza el componente `cotizacion` */}
        </div>
    );
};

export default App;
