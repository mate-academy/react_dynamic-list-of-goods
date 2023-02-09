/* eslint-disable max-len */
import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods, getSelectedColor } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAllGoods = async () => {
    setGoods(await getAll());
  };

  const getFirstFiveGoods = async () => {
    setGoods(await get5First());
  };

  const setRedGoods = async () => {
    setGoods(await getRedGoods());
  };

  const getSelectedColoredGoods = async (color: string) => {
    setGoods(await getSelectedColor(color));
  };


  return (

    <div className="App">
      <h1>Dynamic List of Goods</h1>

      <button
        className="button"
        type="button"
        data-cy="all-button"
        onClick={getAllGoods}
      >
        Load All Goods
      </button>

      <button
        className="button"
        type="button"
        data-cy="first-five-button"
        onClick={getFirstFiveGoods}
      >
        Load 5 First Goods
      </button>

      <button
        className="button"
        type="button"
        data-cy="red-button"
        onClick={setRedGoods}
      >
        Load Red Goods
      </button>

      <label className="dropdown" htmlFor="colors">Select Goods By Color: </label>
      <select onChange={(e) => getSelectedColoredGoods(e.target.value)}>
        <option selected disabled hidden>Choose Here...</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="red">Red</option>
      </select>

      <GoodsList goods={goods} />
    </div>
  );
};
