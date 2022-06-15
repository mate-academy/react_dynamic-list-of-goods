import React, { useState, useEffect } from 'react';
import './App.scss';
import { Good } from './react-app-env';
import { getAll } from './api/goods';
import { GoodsList } from './components/GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  useEffect(() => {
    getAll().then(allGoods => {
      setGoods(allGoods);
    });
  }, []);

  const cashedGoods = () => {
    setVisibleGoods(goods);
  };

  const firstFiveCashedGoods = () => {
    setVisibleGoods([...goods
      .sort((a, b) => a.name.localeCompare(b.name))].slice(0, 5));
  };

  const allRedCashedGoods = () => {
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
