import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';

const App: React.FC = () => {
  const [preparedGoods, setPreparedGoods] = useState<Good[]>([]);

  const loadGoods = async () => {
    setPreparedGoods(await getAll());
  };

  const loadFiveFirstGoods = async () => {
    setPreparedGoods(await get5First());
  };

  const loadRedGoods = async () => {
    setPreparedGoods(await getRedGoods());
  };

  return (
    <div className="container">
      <h1>Dynamic list of Goods</h1>
      <button
        type="button"
        onClick={loadGoods}
      >
        Load All goods
      </button>
      <button
        type="button"
        onClick={loadFiveFirstGoods}
      >
        Load 5 first goods
      </button>
      <button
        type="button"
        onClick={loadRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={preparedGoods} />
    </div>
  );
};

export default App;
