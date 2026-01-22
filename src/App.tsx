import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods'; // імпортуємо як об'єкт
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          goodsAPI
            .getAll()
            .then(setGoods)
            .catch(() => alert('Loading products soon'));
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          goodsAPI
            .get5First()
            .then(setGoods)
            .catch(() => alert('Loading products soon'));
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          goodsAPI
            .getRedGoods()
            .then(setGoods)
            .catch(() => alert('Loading products soon'));
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
