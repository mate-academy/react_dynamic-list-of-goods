import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

const filterFunction = {
  All: getAll,
  Fivefirst: get5First,
  Red: getRedGoods,
};

type Filter = 'All' | 'Fivefirst' | 'Red';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState('');

  const handleChangeFilter = (newFilter: Filter) => {
    setError('');
    filterFunction[newFilter]()
      .then(setGoods)
      .catch((err: Error) => setError(err.message));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleChangeFilter('All')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleChangeFilter('Fivefirst')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleChangeFilter('Red')}
      >
        Load red goods
      </button>

      {error === '' ? <GoodsList goods={goods} /> : <p>{error}</p>}
    </div>
  );
};
