import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

// import { getAll, get5First, getRed } from './api/goods';
// or
import * as goodsAPI from './api/goods';


export const App: React.FC = () => {

  const [goods, setGoods] = useState<Good[]>([]);

  const getAllGoods = () => {
    goodsAPI.getAll().then(setGoods)
  };

  const get5First = () => {
    goodsAPI.get5First().then(setGoods)
  };

  const getRedGoods = () => {
    goodsAPI.getRedGoods().then(setGoods)
  };

  useEffect(() => {
  }, [goods]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={getAllGoods}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={get5First}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={getRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={[...goods]} />
    </div>
  )
};
