import React, { useState } from 'react';
import { getAll, get5First, getRed } from './api/goods';
import './App.scss';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const onVisibleGoods = () => {
    getAll().then(data => setGoods(data));
  };

  const onVisibleData = async (getData: () => Promise<Good[]>) => {
    setGoods(await getData())
  }

  return (
    <div>
      <button
        type="button"
        onClick={onVisibleGoods}
      >
        All goods
      </button>

      <button
        type="button"
        onClick={() => onVisibleData(get5First)}
      >
        First 5 goods
      </button>

      <button
        type="button"
        onClick={() => onVisibleData(getRed)}
      >
        Red goods
      </button>

      <ul>
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
