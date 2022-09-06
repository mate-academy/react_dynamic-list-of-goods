import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [dataLoadError, setDataLoadError] = useState(false);

  const allGoods = () => {
    getAll()
      .then(res => {
        return setGoods(res);
      })
      .catch(error => {
        setDataLoadError(true);
        // eslint-disable-next-line no-console
        console.warn(error);
      });
  };

  const first5Goods = () => {
    get5First()
      .then(res => {
        return setGoods(res);
      })
      .catch(error => {
        setDataLoadError(true);
        // eslint-disable-next-line no-console
        console.warn(error);
      });
  };

  const onlyRedGoods = () => {
    getRedGoods()
      .then(res => {
        return setGoods(res);
      })
      .catch(error => {
        setDataLoadError(true);
        // eslint-disable-next-line no-console
        console.warn(error);
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={allGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={first5Goods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={onlyRedGoods}
      >
        Load red goods
      </button>

      {!dataLoadError && (
        <GoodsList goods={goods} />
      )}

      {dataLoadError && (
        <p style={{ color: 'red' }}>Data load error</p>
      )}
    </div>
  );
};
