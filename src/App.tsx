import React, { useState } from 'react';
import './App.scss';
import { API_URL } from './api/goods';
import { GoodsList } from './GoodsList/GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState([]);

  const getAll = async () => {
    const res = await fetch(API_URL);
    const getGoods = await res.json();

    setGoods(await getGoods);
  };

  const get5First = async () => {
    const res = await fetch(API_URL);
    const getGoods = await res.json();
    const get5Goods = getGoods.slice(0, 5);

    setGoods(await get5Goods);
  };

  const getRedGoods = async () => {
    const res = await fetch(API_URL);
    const getGoods = await res.json();
    const getRed5Goods = getGoods.filter((good: Good) => good.color === 'red');

    setGoods(await getRed5Goods);
  };

  if (!goods) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
      <h1 className="app__title">Dynamic list of Goods</h1>
      <div className="buttons">
        <button
          type="button"
          onClick={getAll}
          className="button"
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={get5First}
          className="button"
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={getRedGoods}
          className="button"
        >
          Load red goods
        </button>
      </div>

      <GoodsList goods={goods} />
    </div>
  );
};

export default App;
