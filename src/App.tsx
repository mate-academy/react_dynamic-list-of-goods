import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsFilterFunctionAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const buttonClickHandle = async (loadedGoods: Promise<Good[]>) => (
    setGoods(await loadedGoods)
  );

  return (

    <div className="App">
      <h1>Dynamic List of Goods</h1>

      <button
        className="button"
        type="button"
        data-cy="all-button"
        onClick={() => buttonClickHandle(goodsFilterFunctionAPI.getAll())}
      >
        Load All Goods
      </button>

      <button
        className="button"
        type="button"
        data-cy="first-five-button"
        onClick={() => buttonClickHandle(goodsFilterFunctionAPI.get5First())}
      >
        Load 5 First Goods
      </button>

      <button
        className="button"
        type="button"
        data-cy="red-button"
        onClick={() => buttonClickHandle(goodsFilterFunctionAPI.getRedGoods())}
      >
        Load Red Goods
      </button>

      <label className="dropdown" htmlFor="colors">Select Goods By Color: </label>
      <select onChange={(e) => buttonClickHandle(goodsFilterFunctionAPI.getSelectedColor(e.target.value))}>
        <option selected disabled hidden>Choose Here...</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="red">Red</option>
      </select>

      <GoodsList goods={goods} />
    </div>
  );
};
