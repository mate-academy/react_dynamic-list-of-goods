import React, { useState } from 'react';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
import './App.scss';

// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [state, setState] = useState<Good[]>([]);

  const loadAll = () => {
    getAll().then(goodsFromServer => {
      return setState(goodsFromServer);
    });
  };

  const filterFirstFive = () => {
    get5First().then(data => {
      return setState(data);
    });
  };

  const loadRed = () => {
    getRedGoods().then(data => {
      return setState(data);
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={() => loadAll()}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={filterFirstFive}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRed}>
        Load red goods
      </button>

      <GoodsList goods={state} />
    </div>
  );
};
