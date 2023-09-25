import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="container text-center">

      <div className="col-3">
        <div className="column">

        <h2>Columna de botones</h2>
        <ul>
          <li>
            <button>Botón 1</button>
          </li>
          <li>
            <button>Botón 2</button>
          </li>
          <li>
            <button>Botón 2</button>
          </li>
        </ul>
      </div>
        </div>
      </div>
      <div className="column">
        <h2>Columna de lista de elementos</h2>
        <ul>
          <li>Elemento 1</li>
          <li>Elemento 2</li>
          <li>Elemento 3</li>
          <li>Elemento 4</li>
          <li>Elemento 5</li>
        </ul>
      </div>
    </div>
  );
};

export default Home
