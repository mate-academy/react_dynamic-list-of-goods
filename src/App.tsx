import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodList } from './GoodList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          getAll()
            .then(goodsFromServer => {
              setGoods(goodsFromServer);
            });
        }}
      >
        Load All goods
      </button>

      <button
        type="button"
        onClick={() => {
          get5First()
            .then(sortedGoods => setGoods(sortedGoods));
        }}
      >
        Load first 5
      </button>

      <button
        type="button"
        onClick={() => {
          getRedGoods()
            .then(x => setGoods(x));
        }}
      >
        Load red goods
      </button>

      <GoodList goods={goods} />
    </>
  );
};

export default App;
