import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getGoods = () => {
    getAll()
      .then(currentGoods => setGoods(currentGoods));
  };

  const showFiveGoods = () => {
    get5First()
      .then(currentGoods => {
        const fiveGoods = currentGoods
          .sort((a, b) => a.name.localeCompare(b.name))
          .splice(0, 5);

        setGoods(fiveGoods);
      });
  };

  const showRedGoods = () => {
    getRedGoods()
      .then(currentGoods => {
        const redGoods = currentGoods.filter(good => good.color === 'red');

        setGoods(redGoods);
      });
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>
      <GoodsList goods={goods} />
      <button
        type="submit"
        onClick={getGoods}
      >
        All
      </button>
      <button
        type="submit"
        onClick={showFiveGoods}
      >
        5
      </button>
      <button
        type="submit"
        onClick={showRedGoods}
      >
        red
      </button>
    </>
  );
};

export default App;
