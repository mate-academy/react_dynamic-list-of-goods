import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { get5First, getAll, getRedGoods } from './api/goods';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  // const loadAllGoods = () => {
  //   fetch(
  //     'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json',
  //   )
  //     .then(response => {
  //       if (response.ok) {
  //         return response.json();
  //       }

  //       throw new Error('Failed to fetch goods');
  //     })
  //     .then((goodsFromServer: Good[]) => {
  //       setGoods(goodsFromServer);
  //     });
  // };

  // const loadFiveGoods = () => {
  //   fetch(
  //     'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json',
  //   )
  //     .then(response => {
  //       if (response.ok) {
  //         return response.json();
  //       }

  //       throw new Error('Failed to fetch goods');
  //     })
  //     .then((goodsFromServer: Good[]) => {
  //       setGoods(
  //         [...goodsFromServer]
  //           .sort((good1, good2) => good1.name.localeCompare(good2.name))
  //           .slice(0, 5),
  //       );
  //     });
  // };

  // const loadRedGoods = () => {
  //   fetch(
  //     'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json',
  //   )
  //     .then(response => {
  //       if (response.ok) {
  //         return response.json();
  //       }

  //       throw new Error('Failed to fetch goods');
  //     })
  //     .then((goodsFromServer: Good[]) => {
  //       setGoods([...goodsFromServer].filter(good => good.color === 'red'));
  //     });
  // };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => getAll().then(setGoods)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => get5First().then(setGoods)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => getRedGoods().then(setGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
