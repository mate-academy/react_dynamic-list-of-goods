import React, { useState } from 'react';
import './App.scss';
import { Good } from './react-app-env';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const allGoods = () => {
    getAll().then(result => setGoods(result));
  };

  const firstFiveGoods = () => {
    get5First().then(result => setGoods(result));
  };

  const allRedGoods = () => {
    getRedGoods().then(result => setGoods(result));
  };

  return (
    <div className="box">
      <div className="button-holder">
        <button
          className="button is-info"
          type="button"
          onClick={allGoods}
        >
          Load All goods
        </button>
        <button
          className="button is-info"
          type="button"
          onClick={firstFiveGoods}
        >
          Load 5 first goods
        </button>
        <button
          className="button is-info"
          type="button"
          onClick={allRedGoods}
        >
          Load red goods
        </button>
      </div>

      <GoodsList goods={goods} />
    </div>
  );
};

export default App;
