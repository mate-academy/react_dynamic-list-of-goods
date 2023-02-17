import React, { useState } from 'react';
import './App.scss';
import 'bulma/css/bulma.css';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | null>(null);
  const [cathError, setCathError] = useState(false);

  const handleButton = async (f:Promise<Good[]>) => {
    try {
      const goodsFromServer = await f;

      setCathError(false);
      setGoods(goodsFromServer);
    } catch {
      setCathError(true);
    }
  };

  return (
    <div className="App section">
      <h1 className="title">Dynamic list of Goods</h1>

      <button
        className="button"
        type="button"
        data-cy="all-button"
        onClick={() => handleButton(getAll())}
      >
        Load all goods
      </button>

      <button
        className="button"
        type="button"
        data-cy="first-five-button"
        onClick={() => handleButton(get5First())}
      >
        Load 5 first goods
      </button>

      <button
        className="button"
        type="button"
        data-cy="red-button"
        onClick={() => handleButton(getRedGoods())}
      >
        Load red goods
      </button>

      {cathError
        ? <p>Could`t load data from server</p>
        : <GoodsList goods={goods} />}
    </div>
  );
};
