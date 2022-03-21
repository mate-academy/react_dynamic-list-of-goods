import React, { useState } from 'react';
import './App.scss';
import { Good } from './interfaces/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './Components/GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const toState = (callback: () => Promise<Good[]>) => {
    callback()
      .then(goodsList => setGoods(goodsList));
  };

  return (
    <>
      <div>
        <button
          type="button"
          onClick={() => toState(getAll)}
        >
          Load All goods
        </button>
      </div>

      <div>
        <button
          type="button"
          onClick={() => toState(get5First)}
        >
          Load 5 first goods
        </button>
      </div>

      <div>
        <button
          type="button"
          onClick={() => toState(getRedGoods)}
        >
          Load red goods
        </button>
      </div>
      <GoodsList goods={goods} />
    </>
  );
};

export default App;
