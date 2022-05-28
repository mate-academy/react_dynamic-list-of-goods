import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './Components/GoodsList/GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getGoods = async (f: () => Promise<Good[]>) => {
    const arrOfGoods = await f();

    setGoods(arrOfGoods);
  };

  return (
    <div className="app">
      <h1 className="app__title">
        Dynamic list of Goods
      </h1>
      <div className="app__buttons">
        <button
          type="button"
          className="app__buttons--button"
          onClick={() => getGoods(getAll)}
        >
          show all goods
        </button>
        <button
          type="button"
          className="app__buttons--button"
          onClick={() => getGoods(get5First)}
        >
          show five goods
        </button>
        <button
          type="button"
          className="app__buttons--button"
          onClick={() => getGoods(getRedGoods)}
        >
          show red goods
        </button>
      </div>

      <GoodsList
        goods={goods}
      />
    </div>
  );
};

export default App;
