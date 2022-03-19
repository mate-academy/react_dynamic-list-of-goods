import React, { useState } from 'react';
import './App.scss';
import { Good } from './interfaces/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './Components/GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  return (
    <>
      <div>
        <button
          type="button"
          onClick={() => getAll().then(goodsList => setGoods(goodsList))}
        >
          Load All goods
        </button>
      </div>

      <div>
        <button
          type="button"
          onClick={() => get5First().then(goodsList => setGoods(goodsList))}
        >
          Load 5 first goods
        </button>
      </div>

      <div>
        <button
          type="button"
          onClick={() => getRedGoods().then(goodsList => setGoods(goodsList))}
        >
          Load red goods
        </button>
      </div>
      <GoodsList goods={goods} />
    </>
  );
};

export default App;
