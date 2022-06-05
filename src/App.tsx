/* eslint-disable no-console */
import React, { useState } from 'react';
import './App.scss';
import 'bulma';
import * as goodsAPI from './api/goods';
import { GoodsList } from './GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleClick = async (callbackFunc: () => Promise<Good[]>) => {
    const items: Good[] = await callbackFunc();

    setGoods(items);
  };

  return (
    <>
      <h1 className="title">List of Goods</h1>

      <button
        type="button"
        onClick={() => handleClick(goodsAPI.getAll)}
        className="button is-primary"
      >
        all
      </button>

      <button
        type="button"
        onClick={() => handleClick(goodsAPI.get5First)}
        className="button is-primary"
      >
        5
      </button>

      <button
        type="button"
        onClick={() => handleClick(goodsAPI.getRedGoods)}
        className="button is-primary"
      >
        red
      </button>

      <GoodsList goods={goods} />
    </>
  );
};

export default App;
