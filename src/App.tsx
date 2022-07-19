import React, { useState } from 'react';
import { GoodsList } from './components/GoodsList';
import { Goods } from './types';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Goods | null>(null);

  return (
    <>
      <h1 className="title has-text-centered">
        Dynamic list of Goods
      </h1>
      {goods
      && <GoodsList goods={goods} />}
      <div className="level buttons is-centered">
        <button
          type="button"
          className="button is-outlined level-item"
          onClick={async () => {
            const newGoods = await getAll();

            setGoods(newGoods);
          }}
        >
          All
        </button>
        <button
          type="button"
          className="button is-outlined level-item"
          onClick={async () => {
            const newGoods = await get5First();

            setGoods(newGoods);
          }}
        >
          5
        </button>
        <button
          type="button"
          className="button has-addons is-outlined level-item"
          onClick={async () => {
            const newGoods = await getRedGoods();

            setGoods(newGoods);
          }}
        >
          Red
        </button>
      </div>
    </>
  );
};

export default App;
