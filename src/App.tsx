import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

const errorMessageText: string = 'Something went wrong. Please try again later';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const loadAllGoods = useCallback(
    () =>
      goodsAPI
        .getAll()
        .then(setGoods)
        .catch(() => setErrorMessage(errorMessageText)),
    [],
  );

  const loadFirstFiveGoods = useCallback(
    () =>
      goodsAPI
        .get5First()
        .then(setGoods)
        .catch(() => setErrorMessage(errorMessageText)),
    [],
  );

  const loadRedGoods = useCallback(
    () =>
      goodsAPI
        .getRedGoods()
        .then(setGoods)
        .catch(() => setErrorMessage(errorMessageText)),
    [],
  );

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={loadFirstFiveGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRedGoods}>
        Load red goods
      </button>

      {errorMessage && <p>{errorMessage}</p>}
      {!errorMessage && goods.length === 0 && <p>No goods loaded</p>}
      {!errorMessage && goods.length > 0 && <GoodsList goods={goods} />}
    </div>
  );
};
