import React, { useState } from 'react';
import { getAll } from './api/goods';
import { Good } from './react-app-env';
import { GoodsList } from './components/GoodsList';

import './App.scss';

const App: React.FC = () => {
  const [allGoods, setAllGoods] = useState<Good[]>([]);

  function getAllGoods() {
    getAll()
      .then((goods) => setAllGoods(goods));
  }

  function get5First() {
    getAll()
      .then((goods) => (
        setAllGoods(goods
          .sort((a, b) => a.name.localeCompare(b.name))
          .slice(0, 5))
      ));
  }

  function getRedGoods() {
    getAll()
      .then((goods) => (
        setAllGoods(goods.filter(el => el.color === 'red'))
      ));
  }

  return (
    <>
      <h1>Dynamic list of Goods</h1>

      {allGoods && (
        <GoodsList allGoods={allGoods} />
      )}

      <button
        type="button"
        onClick={getAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        onClick={get5First}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        onClick={getRedGoods}
      >
        Load red goods
      </button>

    </>
  );
};

export default App;
