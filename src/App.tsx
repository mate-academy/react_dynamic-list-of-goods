import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goodsItems, setGoodsItems] = useState<Good[]>([]);

  useEffect(() => {
    setGoodsItems([]);
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          getAll().then(goodsFromServer => {
            setGoodsItems(goodsFromServer);
          });
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          get5First().then(goodsFromServer => {
            setGoodsItems(goodsFromServer);
          });
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          getRed().then(goodsFromServer => {
            setGoodsItems(goodsFromServer);
          });
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={goodsItems} />
    </div>
  );
};
