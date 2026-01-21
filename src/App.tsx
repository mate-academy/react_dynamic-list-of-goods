import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = React.memo(() => {
  const [goods, setGoods] = useState<Good[]>([]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        onClick={async () => {
          try {
            const data = await getAll();

            setGoods(data);
          } catch (error) {
            // eslint-disable-next-line
            console.log(error);
          }
        }}
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={async () => {
          try {
            const data = await get5First();

            setGoods(data);
          } catch (error) {
            // eslint-disable-next-line
            console.log(error);
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
            const data = await getRedGoods();

            setGoods(data);
          } catch (error) {
            // eslint-disable-next-line
            console.log(error);
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
