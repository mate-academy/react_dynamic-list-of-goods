import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

enum GoodQuery {
  All = 'all',
  First5 = 'first5',
  Red = 'red',
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    switch (query) {
      case GoodQuery.All:
        getAll()
          .then(goodsFromServer => setGoods(goodsFromServer))
          // eslint-disable-next-line no-console
          .catch(error => console.error('Error fetching goods:', error));
        break;

      case GoodQuery.First5:
        get5First()
          .then(goodsFromServer => setGoods(goodsFromServer))
          // eslint-disable-next-line no-console
          .catch(error => console.error('Error fetching goods:', error));
        break;

      case GoodQuery.Red:
        getRedGoods()
          .then(goodsFromServer => setGoods(goodsFromServer))
          // eslint-disable-next-line no-console
          .catch(error => console.error('Error fetching goods:', error));
        break;
    }
  }, [query]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        onClick={() => setQuery(GoodQuery.All)}
        type="button"
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        onClick={() => setQuery(GoodQuery.First5)}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        onClick={() => setQuery(GoodQuery.Red)}
        type="button"
        data-cy="red-button"
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
