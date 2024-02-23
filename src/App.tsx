import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

// import { getAll, get5First, getRed } from './api/goods';
// or
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

enum Goods {
  All = 'all',
  five = 'five',
  Red = 'red',
}

export const App: React.FC = () => {
  const [data, setData] = useState<Good[] | []>([]);

  const handleClick = async (value: Goods) => {
    let dataFromServer;

    switch (value) {
      case Goods.All:
        dataFromServer = await goodsAPI.getAll();
        break;
      case Goods.Red:
        dataFromServer = await goodsAPI.getRedGoods();
        break;
      case Goods.five:
        dataFromServer = await goodsAPI.get5First();
        break;
      default:
        break;
    }

    if (dataFromServer !== undefined) {
      setData(dataFromServer);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleClick(Goods.All)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleClick(Goods.five)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleClick(Goods.Red)}
      >
        Load red goods
      </button>

      <GoodsList goods={data} />
    </div>
  );
};
