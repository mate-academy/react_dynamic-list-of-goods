/* eslint-disable max-len */
/* eslint-disable implicit-arrow-linebreak */
import React, { useMemo, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [preparedGoods, setPreparedGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const onLoad = useMemo(() => () => getAll()
    .then(setPreparedGoods)
    .catch(err => setErrorMessage(err)),
  []);

  const onLoadFirstFive = useMemo(() => () => get5First()
    .then(setPreparedGoods)
    .catch(err => setErrorMessage(err)),
  []);

  const onLoadRedOnes = useMemo(() => () => getRedGoods()
    .then(setPreparedGoods)
    .catch(err => setErrorMessage(err)),
  []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={onLoad}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={onLoadFirstFive}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={onLoadRedOnes}
      >
        Load red goods
      </button>

      {errorMessage
        ? (
          <p>{errorMessage}</p>
        ) : (
          <GoodsList goods={preparedGoods} />
        )}
    </div>
  );
};
