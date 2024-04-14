import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { Good, GoodsTypes } from './types/Good';
import { getGoods } from './services/getGoods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(goods);
  }, [goods]);

  const handleButtonClick = async (type: string) => {
    const fetchedGoods = await getGoods(type);

    setGoods(fetchedGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        onClick={() => handleButtonClick(GoodsTypes.AllGoods)}
        type="button"
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        onClick={() => handleButtonClick(GoodsTypes.FirstFiveGoods)}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        onClick={() => handleButtonClick(GoodsTypes.RedGoods)}
        type="button"
        data-cy="red-button"
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
