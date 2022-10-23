import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [visiableGoods, setVisiableGoods] = useState<Good[]>([]);
  const [showGoods, setShowGoods] = useState('');

  useEffect(() => {
    if (showGoods === 'getAll') {
      getAll()
        .then(result => {
          setVisiableGoods(result);
        });
    }

    if (showGoods === 'get5First') {
      get5First()
        .then(result => {
          setVisiableGoods(result);
        });
    }

    if (showGoods === 'getRed') {
      getRedGoods()
        .then(result => {
          setVisiableGoods(result);
        });
    }
  }, [showGoods]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        className="button is-loading"
        type="button"
        data-cy="all-button"
        onClick={() => setShowGoods('getAll')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setShowGoods('get5First')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setShowGoods('getRed')}
      >
        Load red goods
      </button>
      {showGoods && <GoodsList goods={visiableGoods} />}
    </div>
  );
};
