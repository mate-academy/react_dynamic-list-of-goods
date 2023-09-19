import React, { useState, useEffect } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goodsAll, setGoodsAll] = useState<Good[]>([]);
  const [goodsFive, setGoodsFive] = useState<Good[]>([]);
  const [goodsRed, setGoodsRed] = useState<Good[]>([]);
  const [goodsShowed, setGoodsShowed] = useState<Good[]>([]);

  useEffect(() => {
    getAll().then(data => setGoodsAll(data));
    get5First().then(data => setGoodsFive(data));
    getRedGoods().then(data => setGoodsRed(data));
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => (setGoodsShowed([...goodsAll]))}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => (setGoodsShowed([...goodsFive]))}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => (setGoodsShowed([...goodsRed]))}
      >
        Load red goods
      </button>

      <GoodsList goods={goodsShowed} />
    </div>
  );
};
