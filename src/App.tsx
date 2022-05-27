import React, { useState } from 'react';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodList } from './components/GoodsList';
// or
// import * as goodsAPI from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const selectGoods = async (getGoods: () => Promise<Good[]>) => {
    setGoods(await getGoods());
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => selectGoods(getAll)}
      >
        Load All goods
      </button>
      <button
        type="button"
        onClick={() => selectGoods(get5First)}
      >
        Load 5 first goods
      </button>
      <button
        type="button"
        onClick={() => selectGoods(getRedGoods)}
      >
        Load red goods
      </button>
      <GoodList goods={goods} />
    </div>
  );
};

export default App;
