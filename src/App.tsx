import React, { useState } from 'react';
import { getAll, get5First, getRed } from './api/goods';
import './App.scss';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const onVisibleGoods = () => {
    getAll().then(data => setGoods(data));
  };

  const onVisible5Goods = async () => setGoods(await get5First());

  const onVisibleRedGoods = async () => setGoods(await getRed());

  return (
    <div>
      <button type="button" onClick={onVisibleGoods}>All goods</button>
      <button type="button" onClick={onVisible5Goods}>First 5 goods</button>
      <button type="button" onClick={onVisibleRedGoods}>Red goods</button>

      <ul>
        {goods.map(good => (
          <li key={good.id}>{good.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
