import React, { useState } from 'react';
import { GoodsList } from './components/GoodsList';
import './App.scss';

// import { getAll, get5First, getRed } from './api/goods';
import * as goodsAPI from './api/goods';
// import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

const App: React.FC<Props> = () => {
  const emptyArr: Good[] = [];
  const [goods, newList] = useState(emptyArr);

  const getProducts = () => {
    goodsAPI.getAll()
      .then(products => {
        return newList(products);
      });
  };

  const getFiveProducts = async () => {
    const products = goodsAPI.get5First();

    return (
      newList(await products)
    );
  };

  const getRedProducts = async () => {
    const products = goodsAPI.getRedGoods();

    return (
      newList(await products)
    );
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>
      <button
        type="button"
        onClick={getProducts}
      >
        Load All goods
      </button>
      <button
        type="button"
        onClick={getFiveProducts}
      >
        Load 5 first goods
      </button>
      <button
        type="button"
        onClick={getRedProducts}
      >
        Load red goods
      </button>
      <GoodsList goods={goods} />
    </>
  );
};

export default App;
