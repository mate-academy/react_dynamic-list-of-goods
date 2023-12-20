import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';
const API_URL
 = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

const getAll = () => {
  return fetch(API_URL)
    .then(response => response.json());
};

export const App: React.FC = () => {
  const [renderedGoods, setRenderedGoods] = useState<Good[]>([]);

  const handleAllClick = () => {
    getAll().then(data => setRenderedGoods(data));
  };

  const handle5Click = () => {
    getAll().then((data: Good[]) => {
      const goods = data.sort((a, b) => a.name
        .localeCompare(b.name)).slice(0, 5);

      setRenderedGoods(goods);
    });
  };

  const handleRedClick = () => {
    getAll().then(data => {
      const filtered = data.filter((good: Good) => good.color === 'red');

      setRenderedGoods(filtered);
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleAllClick}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handle5Click}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleRedClick}
      >
        Load red goods
      </button>

      <GoodsList goods={renderedGoods} />
    </div>
  );
};
