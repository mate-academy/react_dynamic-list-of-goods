import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = React.useState<Good[]>([]);
  const [error, setError] = React.useState('');

  const loadAllGoods = React.useCallback(() => {
    setError('');
    goodsAPI
      .getAll()
      .then(setGoods)
      .catch((e: Error) => {
        setError(e.message);
      });
  }, []);

  const load5FirstGoods = React.useCallback(() => {
    setError('');
    goodsAPI
      .get5First()
      .then(setGoods)
      .catch((e: Error) => {
        setError(e.message);
      });
  }, []);

  const loadRedGoods = React.useCallback(() => {
    setError('');
    goodsAPI
      .getRedGoods()
      .then(setGoods)
      .catch((e: Error) => {
        setError(e.message);
      });
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={load5FirstGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRedGoods}>
        Load red goods
      </button>

      {error && (
        <p data-cy="error" className="error">
          {error}
        </p>
      )}

      <GoodsList goods={goods} />
    </div>
  );
};
