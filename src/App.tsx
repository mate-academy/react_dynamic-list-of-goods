import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { Good } from './types/Good';
import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleGetAll = useCallback(() => {
    goodsAPI
      .getAll()
      .then(setGoods)
      .catch(() => {
        // eslint-disable-next-line no-console
        console.error('Failed to load goods');
      });
  }, []);

  const handleGet5First = useCallback(() => {
    goodsAPI
      .get5First()
      .then(setGoods)
      .catch(() => {
        // eslint-disable-next-line no-console
        console.error('Failed to load goods');
      });
  }, []);

  const handleGetRedGoods = useCallback(() => {
    goodsAPI
      .getRedGoods()
      .then(setGoods)
      .catch(() => {
        // eslint-disable-next-line no-console
        console.error('Failed to load goods');
      });
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleGetAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleGet5First}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleGetRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
