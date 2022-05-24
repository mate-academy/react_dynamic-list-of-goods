import React, { useCallback, useState } from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodList } from './components';

enum Request {
  all,
  first5,
  red,
}

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleClick = useCallback(async (request: Request) => {
    switch (request) {
      case Request.first5: {
        const data = await get5First();

        setGoods(data);
      }

        break;

      case Request.red: {
        const data = await getRedGoods();

        setGoods(data);
      }

        break;

      default: {
        const data = await getAll();

        setGoods(data);
      }

        break;
    }
  }, []);

  return (
    <div className="app">
      <h1>Dynamic list of Goods</h1>
      <div className="app__buttons">
        <button
          type="button"
          onClick={() => handleClick(Request.all)}
          className="app__button"
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={() => handleClick(Request.first5)}
          className="app__button"
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={() => handleClick(Request.red)}
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
