import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import { getAll, get5First, getRed } from './api/goods';
import './App.scss';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const onVisibleData = async (getData: ()=>Promise<Good[]>) => {
    setGoods(await getData());
  };

  return (
    <div className="app">
      <button
        className="button"
        type="button"
        onClick={() => onVisibleData(getAll)}
      >
        All goods
      </button>

      <button
        className="button"
        type="button"
        onClick={() => onVisibleData(get5First)}
      >
        First 5 goods
      </button>

      <button
        className="button"
        type="button"
        onClick={() => onVisibleData(getRed)}
      >
        Red goods
      </button>

      <ul className="list">
        {goods.map(good => (
          <li key={good.id}>
            <p style={{ color: good.color }}>{good.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
