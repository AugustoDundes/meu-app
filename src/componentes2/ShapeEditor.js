import React, { useState } from 'react';

function ShapeEditor() {
  const [formas, setFormas] = useState([
    { tipo: 'círculo', x: 150, y: 100 },
    { tipo: 'quadrado', x: 300, y: 100 },
    { tipo: 'círculo', x: 450, y: 100 },
  ]);

  const moverCirculos = () => {
    setFormas(
      formas.map((forma) =>
        forma.tipo === 'círculo'
          ? { ...forma, y: forma.y + 20 }
          : forma
      )
    );
  };

  return (
    <div className="shape-editor">
      <h3>Mova os Círculos para Baixo:</h3>
      <button onClick={moverCirculos}>Mover Círculos</button>
      <div className="shape-container">
        {formas.map((forma, indice) => (
          <div
            key={indice}
            style={{
              position: 'absolute',
              left: `${forma.x}px`,
              top: `${forma.y}px`,
              width: 50,
              height: 50,
              borderRadius: forma.tipo === 'círculo' ? '50%' : '0',
              backgroundColor: 'purple',
              transform: 'translate(-50%, -50%)',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ShapeEditor;
