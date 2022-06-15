import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import './App.scss';
import { GoodsList } from './components/GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const showAllGoods = () => {
    getAll().then(result => setGoods(result));
  };

  const show5Goods = () => {
    get5First().then(result => setGoods(result));
  };

  const showByColor = () => {
    getRedGoods('red').then(result => setGoods(result));
  };

  return (
    <div className="div">
      <div className="mb-4">
        <button
          type="button"
          className="button is-warning mr-5"
          onClick={showAllGoods}
        >
          All
        </button>

        <button
          type="button"
          className="button is-success mr-5"
          onClick={show5Goods}
        >
          5 goods
        </button>

        <button
          type="button"
          className="button is-danger mr-5"
          onClick={showByColor}
        >
          Red goods
        </button>
      </div>
      <GoodsList goods={goods} />
    </div>
  );
};

export default App;
