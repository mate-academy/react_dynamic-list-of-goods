import React, { useState } from 'react';
import './App.scss';
import { Good } from './types/Good';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleGetAll = () => {
    getAll()
      .then(setGoods)
      .catch(error => {
        return error;
      });
  };

  const handleGet5First = () => {
    get5First()
      .then(setGoods)
      .catch(error => {
        return error;
      });
  };

  const handleGetRedGoods = () => {
    getRedGoods()
      .then(setGoods)
      .catch(error => {
        return error;
      });
  };

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

      <GoodsList goods={goods} />
    </div>
  );
};
