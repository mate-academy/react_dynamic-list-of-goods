import React, { useState } from 'react';
import './App.scss';
import { Good } from './react-app-env';
import { getAll } from './api/goods';
import { GoodsList } from './components/GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  const goodsFromServer = () => {
    getAll().then(allGoods => {
      setGoods(allGoods);
      setVisibleGoods(allGoods);
    });
  };

  const cashedGoods = () => {
    if (goods.length === 0) {
      goodsFromServer();
    }

    setVisibleGoods(goods);
  };

  const firstFiveCashedGoods = () => {
    if (goods.length === 0) {
      goodsFromServer();
    }

    setVisibleGoods([...goods
      .sort((a, b) => a.name.localeCompare(b.name))].slice(0, 6));
  };

  const allRedCashedGoods = () => {
    if (goods.length === 0) {
      goodsFromServer();
    }

    setVisibleGoods(goods.filter(good => good.color === 'red'));
  };

  return (
    <div className="box">
      <div className="button-holder">
        <button
          className="button is-info"
          type="button"
          onClick={cashedGoods}
        >
          Load All goods
        </button>
        <button
          className="button is-info"
          type="button"
          onClick={firstFiveCashedGoods}
        >
          Load 5 first goods
        </button>
        <button
          className="button is-info"
          type="button"
          onClick={allRedCashedGoods}
        >
          Load red goods
        </button>
      </div>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};

export default App;
