import React, { useState } from 'react';
import {
  getAll, get5First, getRedGoods, getClearList,
} from './api/goods';
import GoodsList from './components/GoodList';
import './App.scss';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getGoodsFromServer = (getGoods: () => Promise<Good[]>) => {
    getGoods()
      .then(goodsFromServer => {
        setGoods(goodsFromServer);
      });
  };

  return (
    <div className="list">
      <h1 className="list__title">Dynamic list of Goods</h1>

      <button
        className="list__button"
        type="button"
        onClick={() => getGoodsFromServer(getAll)}
      >
        Load All goods
      </button>

      <button
        className="list__button"
        type="button"
        onClick={() => getGoodsFromServer(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        className="list__button"
        type="button"
        onClick={() => getGoodsFromServer(getRedGoods)}
      >
        Load red goods
      </button>

      <button
        className="list__button"
        type="button"
        onClick={() => getGoodsFromServer(getClearList)}
      >
        Clear list
      </button>
      <GoodsList goods={goods} />
    </div>
  );
};

export default App;
