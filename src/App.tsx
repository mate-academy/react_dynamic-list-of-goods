import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = React.useState<Good[]>([]);

  const loadAll = () => {
    getAll()
      .then(gds => setGoods(gds))
      .catch(err => {
        return <p>Error: {err.message}</p>;
      });
  };

  const load5First = () => {
    get5First()
      .then(gds => setGoods(gds))
      .catch(err => {
        return <p>Error: {err.message}</p>;
      });
  };

  const loadRedGoods = () => {
    getRedGoods()
      .then(gds => setGoods(gds))
      .catch(err => {
        return <p>Error: {err.message}</p>;
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button onClick={loadAll} type="button" data-cy="all-button">
        Load all goods
      </button>

      <button onClick={load5First} type="button" data-cy="first-five-button">
        Load 5 first goods
      </button>

      <button onClick={loadRedGoods} type="button" data-cy="red-button">
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
