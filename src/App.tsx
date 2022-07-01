import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const all = () => {
    getAll().then(good => setGoods(good));
  };

  const fiveFirst = () => {
    get5First().then(good => setGoods(good));
  };

  const reds = () => {
    getRedGoods().then(good => setGoods(good));
  };

  return (
    <div>
      <button
        type="button"
        onClick={all}
      >
        All
      </button>

      <button
        type="button"
        onClick={fiveFirst}
      >
        5
      </button>

      <button
        type="button"
        onClick={reds}
      >
        Red
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

export default App;
