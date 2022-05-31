/* eslint-disable no-console */
import React, { useState } from 'react';
import './App.scss';
import 'bulma';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const showAllGoods = async () => {
    const items: Good[] = await getAll();

    setGoods(items);
  };

  const showFiveFirstGoods = () => {
    get5First().then(items => setGoods(items));
  };

  const showRedGoods = () => {
    getRedGoods().then(items => setGoods(items));
  };

  return (
    <>
      <h1 className="title">List of Goods</h1>

      <button
        type="button"
        onClick={showAllGoods}
        className="button is-primary"
      >
        all
      </button>

      <button
        type="button"
        onClick={showFiveFirstGoods}
        className="button is-primary"
      >
        5
      </button>

      <button
        type="button"
        onClick={showRedGoods}
        className="button is-primary"
      >
        red
      </button>

      <GoodsList goods={goods} />
    </>
  );
};

export default App;
