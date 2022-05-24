import React, { useState } from 'react';
import { GoodsList } from './components/GoodList';
import './App.scss';

import { getAll, getRedGoods, get5First } from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadGoods = async () => {
    const goodsFromServer = await getAll();

    setGoods(goodsFromServer);
  };

  const loadFive = async () => {
    const fiveGoodsFromServer = await get5First();

    setGoods(fiveGoodsFromServer);
  };

  const loadRedGoods = async () => {
    const redGoodsFromServer = await getRedGoods();

    setGoods(redGoodsFromServer);
  };

  return (
    <div className="App">
      <h1 className="App__title">Dynamic list of Goods</h1>

      <div className="App__buttons">
        <button
          type="button"
          onClick={loadGoods}
          className="App__button"
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={loadFive}
          className="App__button"
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={loadRedGoods}
          className="App__button"
        >
          Load red goods
        </button>
      </div>

      {goods.length > 0 && <GoodsList goods={goods} />}
    </div>
  );
};

export default App;
