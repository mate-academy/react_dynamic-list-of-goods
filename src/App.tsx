import './App.scss';
import { useState } from 'react';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoaderOfAllGoods = () => {
    getAll()
      .then(setGoods);
  };

  const handleLoaderOfFiveFirstGoods = () => {
    get5First()
      .then(setGoods);
  };

  const handleLoaderOfRedGoods = () => {
    getRedGoods()
      .then(setGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <div className="button-group">
        <button
          type="button"
          data-cy="all-button"
          onClick={handleLoaderOfAllGoods}
        >
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={handleLoaderOfFiveFirstGoods}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          data-cy="red-button"
          onClick={handleLoaderOfRedGoods}
        >
          Load red goods
        </button>
      </div>
      <GoodsList goods={goods} />
    </div>
  );
};
