import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleGetGoods = (action: () => Promise<Good[]>) => {
    action()
      .then(value => {
        setGoods(value);
      });
  };

  // const handleGet5First = () => {
  //   goodsAPI.get5First() => {

  //   }
  // }

  // const handleGetAll = async () => {
  //   try {
  //     const response = await goodsAPI.getAll();

  //     setGoods(response);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     console.log('finally');
  //   }
  // };

  // console.log(goods);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleGetGoods(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleGetGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleGetGoods(getRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
