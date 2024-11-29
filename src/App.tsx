import { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const all = async () => {
    const result = await goodsAPI.getAll();

    setGoods(result);
  };

  const firstFive = async () => {
    const result = await goodsAPI.get5First();

    setGoods(result);
  };

  const red = async () => {
    const result = await goodsAPI.getRedGoods();

    setGoods(result);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" onClick={all} data-cy="all-button">
        Load all goods
      </button>

      <button type="button" onClick={firstFive} data-cy="first-five-button">
        Load 5 first goods
      </button>

      <button type="button" onClick={red} data-cy="red-button">
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
