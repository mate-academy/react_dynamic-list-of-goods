import React, { useState } from 'react';
import './App.scss';

// inport
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  // const [goodsClick, setGoodsClick] = useState(false);

  // useEffect(() => {
  //   getAll();
  //   get5First();
  //   getRedGoods();
  // }, [goodsClick]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          getAll().then(setGoods);
          // setGoodsClick(true);
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          get5First().then(setGoods);
          // setGoodsClick(true);
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          getRedGoods().then(setGoods);
          // setGoodsClick(true);
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
