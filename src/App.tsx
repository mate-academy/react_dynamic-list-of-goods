import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
// import { union } from 'cypress/types/lodash';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';
type FilterTypeName = 'all' | 'color' | 'five';

export const App: React.FC = () => {
  const [filterType, setFilterType] = useState<FilterTypeName>('all');
  const [date, setDate] = useState<Good[]>([]);

  useEffect(() => {
    switch (filterType) {
      case 'all':
        getAll().then(setDate);
        break;
      case 'color':
        getRedGoods().then(setDate);
        break;
      case 'five':
        get5First().then(setDate);
        break;
    }
  }, [filterType]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setFilterType('all')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setFilterType('five')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setFilterType('color')}
      >
        Load red goods
      </button>

      <GoodsList goods={date} />
    </div>
  );
};
