import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = React.useState<Good[]>([]);

  const loadAllGoods = React.useCallback(() => {
    goodsAPI
      .getAll()
      .then(setGoods)
      .catch(() => {
        alert('Failed to load goods');
      });
  }, []);

  const load5Goods = React.useCallback(() => {
    goodsAPI
      .get5First()
      .then(setGoods)
      .catch(() => {
        alert('Failed to load 5 first goods');
      });
  }, []);

  const loadRedGoods = React.useCallback(() => {
    goodsAPI
      .getRedGoods()
      .then(setGoods)
      .catch(() => {
        alert('Failed to load red goods');
      });
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadAllGoods}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={load5Goods}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
