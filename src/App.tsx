import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const allGoods = async () => {
    const result = await getAll();

    return setGoods(result);
  };

  const first5Goods = async () => {
    const result = await get5First();

    return setGoods(result);
  };

  const redGoods = async () => {
    const result = await getRedGoods('red');

    return setGoods(result);
  };

  return (
    <div>
      <button
        type="button"
        className="button"
        onClick={allGoods}
      >
        Load All goods
      </button>

      <button
        type="button"
        className="button"
        onClick={first5Goods}
      >
        Load 5 first
      </button>

      <button
        type="button"
        className="button"
        onClick={redGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

export default App;
