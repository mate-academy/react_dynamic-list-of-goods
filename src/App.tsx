import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [visibleGoods, setGoods] = useState<Good[]>([]);
  const [type, setType] = useState('');

  useEffect(() => {
    if (type === 'All') {
      getAll().then(setGoods);
    }

    if (type === 'Five') {
      get5First().then(setGoods);
    }

    if (type === 'Red') {
      getRedGoods().then(setGoods);
    }
  }, [type]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={() => setType('All')}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setType('Five')}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={() => setType('Red')}>
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
