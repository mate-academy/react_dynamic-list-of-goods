import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isError, setIsError] = useState(false);

  const handleShowGoods = async (getGoods: () => Promise<Good[]>) => {
    try {
      setIsError(false);
      const goodFromServer = await getGoods();

      setGoods(goodFromServer);
    } catch {
      setIsError(true);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleShowGoods(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleShowGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleShowGoods(getRedGoods)}
      >
        Load red goods
      </button>

      {isError ? (
        <p>Canoot load goods. Try again!</p>
      ) : (
        <GoodsList goods={goods} />
      )}

    </div>
  );
};
