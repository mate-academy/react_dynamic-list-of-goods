import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll } from './api/goods';

interface Good {
  id: number;
  name: string;
  color: string;
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAllGoods = async () => {
    const data = await getAll();

    setGoods(data);
  };

  const loadFirstFive = async () => {
    const data = await getAll();

    const processed = [...data]
      .sort((a, b) => a.name.localeCompare(b.name))
      .slice(0, 5);

    setGoods(processed);
  };

  const loadRedGoods = async () => {
    const data = await getAll();

    const redGoods = data.filter(good => good.color === 'red');

    setGoods(redGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <div className="control-panel">
        <button type="button" data-cy="all-button" onClick={loadAllGoods}>
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={loadFirstFive}
        >
          Load 5 first goods
        </button>

        <button type="button" data-cy="red-button" onClick={loadRedGoods}>
          Load red goods
        </button>
      </div>

      <GoodsList goods={goods} />
    </div>
  );
};
