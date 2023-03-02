import './App.scss';
import { useState } from 'react';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoader = (loadedGoods: Promise<Good[]>) => {
    loadedGoods
      .then(setGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <div className="button-group">
        <button
          type="button"
          data-cy="all-button"
          onClick={() => handleLoader(getAll())}
        >
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={() => handleLoader(get5First())}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          data-cy="red-button"
          onClick={() => handleLoader(getRedGoods())}
        >
          Load red goods
        </button>
      </div>
      <GoodsList goods={goods} />
    </div>
  );
};
