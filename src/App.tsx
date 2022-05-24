import React, { useState } from 'react';
import GoodsList from './components/GoodsList/GoodsList';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

const App: React.FC = () => {
  const [list, setList] = useState<Good[]>([]);

  const click = async (callback: () => Promise<Good[]>) => {
    const goods = await callback();

    setList(goods);
  };

  return (
    <div className="app">
      <GoodsList goods={list} />
      <div className="app__buttons">
        <button
          className="app__button"
          type="button"
          onClick={() => click(getAll)}
        >
          Load All goods
        </button>
        <button
          className="app__button"
          type="button"
          onClick={() => click(get5First)}
        >
          Load 5 first goods
        </button>
        <button
          className="app__button"
          type="button"
          onClick={() => click(getRedGoods)}
        >
          Load red goods
        </button>
      </div>
    </div>
  );
};

export default App;
