import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [data, setData] = useState<Good[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const handleAllData = () => {
    getAll()
      .then(allDataFromServer => {
        setData(allDataFromServer);
        setError(null);
      })
      .catch((err: Error) => setError(err));

    console.log(getAll());
  };

  const handleFirst5Data = () => {
    get5First()
      .then(First5Data => {
        setData(First5Data);
        setError(null);
      })
      .catch(err => setError(err));
  };

  const handleRedData = () => {
    getRedGoods()
      .then(redData => {
        setData(redData);
        setError(null);
      })
      .catch(err => setError(err));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleAllData}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFirst5Data}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleRedData}>
        Load red goods
      </button>

      {error && <p style={{ color: 'red' }}>{error.message}</p>}
      <GoodsList goods={data} />
    </div>
  );
};
