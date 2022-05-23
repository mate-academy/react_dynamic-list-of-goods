import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';

// import { getAll, get5First, getRedGoods } from './api/goods';
// or
import * as goodsAPI from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAll = async () => {
    const receivedGoods = await goodsAPI.getAll();

    setGoods(receivedGoods);
  };

  const get5First = async () => {
    const receivedGoods = await goodsAPI.get5First();

    setGoods(receivedGoods);
  };

  const getRedGoods = async () => {
    const receivedGoods = await goodsAPI.getRedGoods();

    setGoods(receivedGoods);
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>

      <GoodsList goods={goods} />

      <button
        type="button"
        onClick={() => getAll()}
      >
        load all goods
      </button>

      <button
        type="button"
        onClick={() => getRedGoods()}
      >
        load red goods
      </button>

      <button
        type="button"
        onClick={() => get5First()}
      >
        load 5 firs goods
      </button>
    </>
  );
};

export default App;
