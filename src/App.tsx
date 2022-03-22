import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodList } from './GoodList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getGoodsFromServer = (getGoods: () => Promise<Good[]>) => {
    getGoods()
      .then(goodsFromServer => {
        setGoods(goodsFromServer);
      });
  };

  return (
    <>
      <button
        type="button"
        onClick={() => getGoodsFromServer(getAll)}
      >
        Load All goods
      </button>

      <button
        type="button"
        onClick={() => getGoodsFromServer(get5First)}
      >
        Load first 5
      </button>

      <button
        type="button"
        onClick={() => getGoodsFromServer(getRedGoods)}
      >
        Load red goods
      </button>

      <GoodList goods={goods} />
    </>
  );
};

export default App;
