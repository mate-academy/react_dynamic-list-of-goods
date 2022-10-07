import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

// import { getAll, get5First, getRed } from './api/goods';
// or
import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState([{
    id: 0,
    name: '',
    color: '',
  }]);
  const [inicialized, setInicialized] = useState(false);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={async () => {
          await goodsAPI.getAll().then(goods => setVisibleGoods(goods));
          setInicialized(true);
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={async () => {
          await goodsAPI.get5First().then(goods => setVisibleGoods(goods));
          setInicialized(true);
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={async () => {
          await goodsAPI.getRedGoods().then(goods => setVisibleGoods(goods));
          setInicialized(true);
        }}
      >
        Load red goods
      </button>

      {inicialized && <GoodsList goods={visibleGoods} />}
    </div>
  );
};
