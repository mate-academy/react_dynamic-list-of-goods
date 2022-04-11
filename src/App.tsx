import React, { useState } from 'react';
import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRed } from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAllGoods = () => {
    getAll()
      .then(good => {
        setGoods(good);
      });
  };

  const get5FirstGoods = () => {
    get5First()
      .then(good => {
        setGoods(good);
      });
  };

  const getRedGoods = () => {
    getRed()
      .then(good => {
        setGoods(good);
      });
  };

  return (
    <>
      <button type="button" onClick={getAllGoods}>Get All Goods</button>

      <button
        type="button"
        onClick={get5FirstGoods}
      >
        Get Five First Goods
      </button>

      <button type="button" onClick={getRedGoods}>Get Red Goods</button>
      <GoodsList goods={goods} />
    </>
  );
};

export default App;
