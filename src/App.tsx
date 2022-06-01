import React, { useState } from 'react';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';
import './App.scss';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAllGoods = (getGoods: () => Promise<Good[]>) => {
    getGoods()
      .then(goodsFromServer => {
        setGoods(goodsFromServer);
      });
  };

  return (
    <div className="goods-container">
      <h1>Dynamic list of Goods</h1>
      <button
        type="button"
        className="button"
        onClick={() => getAllGoods(getAll)}
      >
        All goods
      </button>

      <button
        type="button"
        className="button"
        onClick={() => getAllGoods(get5First)}
      >
        5 goods
      </button>

      <button
        type="button"
        className="button"
        onClick={() => getAllGoods(getRedGoods)}
      >
        Red goods
      </button>
      <GoodsList goods={goods} />
    </div>
  );
};

export default App;
