import React, { useState } from 'react';
import { get5First, getAll, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

import './App.scss';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleClick = async (show: () => Promise<Good[]>) => {
    const goodsShow = await show();

    setGoods(goodsShow);
  };

  return (
    <div className="goods">
      <h1 className="goods__title">Dynamic list of Goods</h1>
      <div className="goods__content">
        <GoodsList
          goods={goods}
        />
        <div className="goods__buttons buttons">
          <button
            type="button"
            className="button"
            onClick={() => handleClick(getAll)}
          >
            all
          </button>
          <button
            type="button"
            className="button"
            onClick={() => handleClick(get5First)}
          >
            first
          </button>
          <button
            type="button"
            className="button"
            onClick={() => handleClick(getRedGoods)}
          >
            red
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
