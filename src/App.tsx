import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRed } from './api/goods';
import { GoodsList } from './components/GoodsList';
import { Good } from './react-app-env';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const showAll = () => {
    getAll()
      .then((goodsFromServer) => {
        setGoods(goodsFromServer);
      });
  };

  const showFive = () => {
    get5First()
      .then((goodsFromServer) => {
        setGoods(goodsFromServer);
      });
  };

  const showRed = () => {
    getRed()
      .then((goodsFromServer) => {
        setGoods(goodsFromServer);
      });
  };

  return (
    <div className="App">
      <h1 className="title">Dynamic list of Goods</h1>

      <div className="buttons">
        <button
          type="button"
          className="button is-warning"
          onClick={showAll}
        >
          All
        </button>

        <button
          type="button"
          className="button is-success"
          onClick={showFive}
        >
          5
        </button>

        <button
          type="button"
          className="button is-danger"
          onClick={showRed}
        >
          Red
        </button>
      </div>

      <GoodsList goods={goods} />
    </div>
  );
};

export default App;
