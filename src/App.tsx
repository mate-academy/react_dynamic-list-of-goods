import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getGoods = (func: Promise<Good[]>) => {
    func.then(result => {
      setGoods(result);
    });
  };

  return (
    <div className="App">
      <h1>DYNAMIC LIST OF GOODS</h1>
      <div className="buttonWraper">
        <button
          type="button"
          data-cy="all-button"
          onClick={() => getGoods(getAll())}
        >
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={() => getGoods(get5First())}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          data-cy="red-button"
          onClick={() => getGoods(getRedGoods())}
        >
          Load red goods
        </button>
      </div>

      <GoodsList goods={goods} />
    </div>
  );
};
