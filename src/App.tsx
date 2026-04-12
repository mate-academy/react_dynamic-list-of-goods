import { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import type { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorLoading, setErrorLoading] = useState<Error | null>(null);

  const showGoods = (): void => {
    setErrorLoading(null);
    getAll()
      .then(data => {
        if (JSON.stringify(data) !== JSON.stringify(goods)) {
          setGoods(data);
        }
      })
      .catch(error => {
        setErrorLoading(error);
      });
  };

  const show5First = (): void => {
    setErrorLoading(null);
    get5First()
      .then(data => {
        if (JSON.stringify(data) !== JSON.stringify(goods)) {
          setGoods(data);
        }
      })
      .catch(error => {
        setErrorLoading(error);
      });
  };

  const showRed = (): void => {
    setErrorLoading(null);
    getRedGoods()
      .then(data => {
        if (JSON.stringify(data) !== JSON.stringify(goods)) {
          setGoods(data);
        }
      })
      .catch(error => {
        setErrorLoading(error);
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={showGoods}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={show5First}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={showRed}>
        Load red goods
      </button>
      {errorLoading ? (
        <p>{errorLoading.message}</p>
      ) : (
        <GoodsList goods={goods} />
      )}
    </div>
  );
};
