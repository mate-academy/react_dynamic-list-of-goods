import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const loadGoods = (loader: () => Promise<Good[]>) => {
    setErrorMessage('');

    loader()
      .then(setGoods)
      .catch(() => setErrorMessage('Something went wrong'));
  };

  const loadAllGoods = () => loadGoods(getAll);
  const load5FirstGoods = () => loadGoods(get5First);
  const loadRedGoods = () => loadGoods(getRedGoods);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      {errorMessage && <p className="App__error">{errorMessage}</p>}

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

      <GoodsList goods={goods} />
    </div>
  );
};
