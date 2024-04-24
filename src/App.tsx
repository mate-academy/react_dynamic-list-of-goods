import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleGetAll = () => {
    getAll().then(data => setGoods(data));
  };

  const handleGet5 = () => {
    get5First()
      .then(data =>
        data.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5),
      )
      .then(sortedData => setGoods(sortedData));
  };

  const handleGetRed = () => {
    getRed().then(data => setGoods(data.filter(good => good.color === 'red')));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleGetAll}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={handleGet5}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleGetRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

export default App;
