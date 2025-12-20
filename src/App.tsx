import React, { useCallback, useState } from 'react';
import './App.scss';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
import MemoGoodsList from './GoodsList';

// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [selectedGoods, setSelectedGoods] = useState<null | Good[]>(null);
  const [errorMesage, setErrorMesage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleReloader = useCallback(
    (value: 'all' | 'firstFive' | 'color'): void => {
      let promise: Promise<Good[]>;

      setErrorMesage('');
      setLoading(true);

      if (value === 'all') {
        promise = getAll();
      } else if (value === 'firstFive') {
        promise = get5First();
      } else {
        promise = getRedGoods();
      }

      promise
        .then(goods => setSelectedGoods(goods))
        .catch(error => {
          setErrorMesage(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [],
  );

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      {loading && <p>Loading......</p>}
      {errorMesage && errorMesage}
      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          handleReloader('all');
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          handleReloader('firstFive');
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          handleReloader('color');
        }}
      >
        Load red goods
      </button>

      {selectedGoods && <MemoGoodsList goods={selectedGoods} />}
    </div>
  );
};
