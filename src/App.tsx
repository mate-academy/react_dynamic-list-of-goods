import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getGoods } from './services/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goodsList, setGoodsList] = useState<Good[]>([]);

  const handleLoadAllGoods = () => {
    getGoods().then(setGoodsList);
  };

  function compare(a: Good, b: Good) {
    const nameA = a.name;
    const nameB = b.name;

    if (nameA > nameB) {
      return 1;
    }

    if (nameA < nameB) {
      return -1;
    }

    return 0;
  }

  const handleLoad5Goods = () => {
    getGoods()
      .then((goods) => {
        setGoodsList(goods.sort(compare).slice(0, 5));
      });
  };

  const handleLoadRedGoods = () => {
    getGoods()
      .then((goods) => {
        setGoodsList(goods.filter((user: Good) => user.color === 'red'));
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleLoadAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoad5Goods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleLoadRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={goodsList} />
    </div>
  );
};
