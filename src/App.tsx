import React, { useState } from 'react';
import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRed } from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const chooseGoods = (callback:() => Promise<Good[]>) => {
    callback().then((good) => {
      setGoods(good);
    });
  };

  return (
    <>
      <button
        type="button"
        onClick={() => chooseGoods(getAll)}
      >
        Get All Goods
      </button>

      <button
        type="button"
        onClick={() => chooseGoods(get5First)}
      >
        Get Five First Goods
      </button>

      <button
        type="button"
        onClick={() => chooseGoods(getRed)}
      >
        Get Red Goods
      </button>
      <GoodsList goods={goods} />
    </>
  );
};

export default App;
