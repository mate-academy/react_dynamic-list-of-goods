import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  return (
    <div className="App box">
      <h1 className="title">Dynamic list of Goods</h1>

      <button
        className="button"
        type="button"
        onClick={async () => setGoods(await getAll())}
      >
        Load All goods
      </button>

      <button
        className="button"
        type="button"
        onClick={async () => setGoods(await get5First())}
      >
        Load 5 first goods
      </button>

      <button
        className="button"
        type="button"
        onClick={async () => setGoods(await getRedGoods())}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

export default App;
