import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [goodsFromServer, setGoodsFromServer] = useState<Good[]>([]);

  function handleGetAll() {
    getAll()
      .then((goods: Good[]) => {
        setGoodsFromServer(goods);
        setError(null);
      })
      .catch(status => {
        setError(status.message || String(status));
        setGoodsFromServer([]);
      });
  }

  function handleGet5First() {
    get5First()
      .then((goods: Good[]) => {
        setGoodsFromServer(goods);
        setError(null);
      })
      .catch(status => {
        setError(status.message || String(status));
        setGoodsFromServer([]);
      });
  }

  function handleGetRedGoods() {
    getRedGoods()
      .then((goods: Good[]) => {
        setGoodsFromServer(goods);
        setError(null);
      })
      .catch(status => {
        setError(status.message || String(status));
        setGoodsFromServer([]);
      });
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleGetAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleGet5First}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleGetRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goodsFromServer} errorMessage={error} />
    </div>
  );
};
