import React, { useCallback, useState } from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodList } from './components';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleClick = useCallback(async (request: () => Promise<Good[]>) => {
    const data = await request();

    setGoods(data);
  }, []);

  return (
    <div className="app">
      <h1>Dynamic list of Goods</h1>
      <div className="app__buttons">
        <button
          type="button"
          onClick={() => handleClick(getAll)}
          className="app__button"
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={() => handleClick(get5First)}
          className="app__button"
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={() => handleClick(getRedGoods)}
          className="app__button"
        >
          Load red goods
        </button>
      </div>

      <GoodList goods={goods} />
    </div>
  );
};

export default App;
