import React, { useState } from 'react';
import * as goodsAPI from './api/goods';
import './App.scss';
import { GoodList } from './Components/GoodList/GoodList';
import 'bulma';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleGetAll = () => {
    goodsAPI.getAll().then(goodsFromServer => setGoods(goodsFromServer));
  };

  const handleGet5First = () => {
    goodsAPI.get5First().then(goodsFromServer => (
      setGoods(goodsFromServer.slice(0, 5))
    ));
  };

  const handleGetRedGoods = () => {
    goodsAPI.getRedGoods().then(goodsFromServer => (
      setGoods(goodsFromServer.filter(good => good.color === 'red'))
    ));
  };

  return (
    <div className="container">
      <h1 className="title">Dynamic list of Goods</h1>

      <button
        type="button"
        onClick={handleGetAll}
        className="button"
      >
        all
      </button>

      <button
        type="button"
        onClick={handleGet5First}
        className="button"
      >
        5
      </button>

      <button
        type="button"
        onClick={handleGetRedGoods}
        className="button"
      >
        red
      </button>

      <GoodList goods={goods} />
    </div>
  );
};

export default App;
