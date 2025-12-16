import React, { useCallback, useState } from 'react';
import './App.scss';
import GoodsList from './GoodsList';

import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleGetAllGoodsClick = useCallback(() => {
    goodsAPI
      .getAll()
      .then(data => {
        setGoods(data);
      })
      .catch(e => {
        setError(String(e));
      });
  }, []);

  const handleGet5GoodsClick = useCallback(() => {
    goodsAPI
      .get5First()
      .then(data => {
        setGoods(data);
      })
      .catch(e => {
        setError(String(e));
      });
  }, []);

  const handleGetRedGoodsClick = useCallback(() => {
    goodsAPI
      .getRedGoods()
      .then(data => {
        setGoods(data);
      })
      .catch(e => {
        setError(String(e));
      });
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleGetAllGoodsClick}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleGet5GoodsClick}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleGetRedGoodsClick}
      >
        Load red goods
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {goods.length > 0 && !error && <GoodsList goods={goods} />}
    </div>
  );
};
