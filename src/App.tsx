import { FC, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleGetAll = async () => {
    const allGoods = await getAll();

    setGoods(allGoods);
  };

  const handleGetFirst5 = async () => {
    const first5 = await get5First();

    setGoods(first5);
  };

  const handleGetReds = async () => {
    const reds = await getRedGoods();

    setGoods(reds);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleGetAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleGetFirst5}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleGetReds}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
