import React, { useState } from 'react';
import * as goodsAPI from './api/goods';
import { GoodsList } from './components/GoodsList';
import './App.scss';

const App: React.FC = () => {
  const { getAll, get5First, getRedGoods } = goodsAPI;
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAllGoods = async () => {
    return setGoods(await getAll());
  };

  const loadFirst5Goods = async () => {
    return setGoods(await get5First());
  };

  const loadRedGoods = async () => {
    return setGoods(await getRedGoods());
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <div className="buttons">
        <button
          type="button"
          onClick={loadAllGoods}
        >
          all
        </button>
        <button
          type="button"
          onClick={loadFirst5Goods}
        >
          5
        </button>
        <button
          type="button"
          onClick={loadRedGoods}
        >
          red
        </button>
      </div>

      {goods.length > 0 ? (
        <GoodsList goods={goods} />
      ) : ('No goods loaded yet')}
    </div>
  );
};

export default App;
