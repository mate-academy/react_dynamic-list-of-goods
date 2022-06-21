import React, { useState } from 'react';
import './App.scss';
import { Good } from './react-app-env';
import { getAll, getTheFirstFive, getReds } from './api/goods';
import { GoodsList } from './components/GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const all = () => {
    getAll().then(every => setGoods(every));
  };

  const theFirstFive = () => {
    getTheFirstFive().then(ordinal => setGoods(ordinal));
  };

  const reds = () => {
    getReds().then(goodsColor => setGoods(goodsColor));
  };

  return (
    <div className="box">
      <div className="button-holder">
        <button
          className="button is-info"
          type="button"
          onClick={all}
        >
          Load All goods
        </button>
        <button
          className="button is-info"
          type="button"
          onClick={theFirstFive}
        >
          Load 5 first goods
        </button>
        <button
          className="button is-info"
          type="button"
          onClick={reds}
        >
          Load red goods
        </button>
      </div>

      <GoodsList goods={goods} />
    </div>
  );
};

export default App;
