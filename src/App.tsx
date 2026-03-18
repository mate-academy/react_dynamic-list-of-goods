import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [arrayGoods, setArrayGoods] = useState<Good[]>([]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={async () => {
          try {
            const data = await getAll();

            setArrayGoods(data);
          } catch (e) {
            return;
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
            const data = await get5First();

            setArrayGoods(data);
          } catch (e) {
            return;
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

            setArrayGoods(data);
          } catch (e) {
            return;
          }
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={arrayGoods} />
    </div>
  );
};
