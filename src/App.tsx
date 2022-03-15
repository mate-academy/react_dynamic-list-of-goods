import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import GoodsList from './components/GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setLoading] = useState(false);

  const clickHandler = async (goodsGetter: () => Promise<Good[]>) => {
    setLoading(true);
    setGoods(await goodsGetter());
    setLoading(false);
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        goods.length > 0 && <GoodsList {...{ goods }} />
      )}

      <button
        type="button"
        onClick={() => clickHandler(getAll)}
      >
        Load all
      </button>
      <button
        type="button"
        onClick={() => clickHandler(get5First)}
      >
        Load first 5
      </button>
      <button
        type="button"
        onClick={() => clickHandler(getRedGoods)}
      >
        Load red
      </button>
    </>
  );
};

export default App;
