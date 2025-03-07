import React from 'react';
import { useState, memo } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = memo(() => {
  const [goods, setGoods] = useState<Good[]>([]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={async () => {
          try {
            const allGoods = await getAll();

            setGoods(allGoods);
          } catch (err) {
            throw new Error(`Goods loading failed: ${err}`);
          }
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={async () => {
          try {
            const firstFiveGoods = await get5First().then(item =>
              item.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5),
            );

            setGoods(firstFiveGoods);
          } catch (err) {
            throw new Error(`First 5 goods loading failed: ${err}`);
          }
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={async () => {
          try {
            const redGoods = await getRedGoods().then(item =>
              item.filter(good => good.color === 'red'),
            );

            setGoods(redGoods);
          } catch (err) {
            throw new Error(`Red goods loading failed: ${err}`);
          }
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
});

App.displayName = 'App';
