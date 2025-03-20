import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleAllGoods = () => {
    getAll()
      .then(data => setGoods(data))
      .catch(() => {
        alert(
          'Wystąpił problem z pobieraniem danych. Spróbuj ponownie później.',
        );
      });
  };

  const handleFiveGoods = () => {
    get5First()
      .then(data => setGoods(data))
      .catch(() => {
        alert(
          'Wystąpił problem z pobieraniem danych. Spróbuj ponownie później.',
        );
      });
  };

  const handleRedClick = () => {
    getRedGoods()
      .then(data => setGoods(data))
      .catch(() => {
        alert(
          'Wystąpił problem z pobieraniem danych. Spróbuj ponownie później.',
        );
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFiveGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleRedClick}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
