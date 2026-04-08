import React, { useState, useEffect } from 'react';

import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
import { GoodsList } from './components/GoodsList';
import { Loader } from './components/Loader';

const getData = (filter: GoodsFilter) => {
  switch (filter) {
    case 'all':
      return getAll();
    case 'first-five':
      return get5First();
    case 'red':
      return getRedGoods();
  }
};

type GoodsFilter = 'all' | 'first-five' | 'red';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [goodsFilter, setGoodsFilter] = useState<GoodsFilter | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [isFirstRender, setIsFirstRender] = useState(true);

  const filterGoods = (filter: GoodsFilter) => {
    setGoodsFilter(filter);
  };

  useEffect(() => {
    if (goodsFilter !== null) {
      setIsFirstRender(false);
      setIsLoading(true);
      setErrorMessage('');
      getData(goodsFilter)
        .then(setGoods)
        .catch(error => setErrorMessage(error.message))
        .finally(() => setIsLoading(false));
    }
  }, [goodsFilter]);

  return (
    <div className="App container box">
      <h1 className="title is-1">Dynamic list of Goods</h1>

      <div className="buttons">
        <button
          className="button is-info"
          onClick={() => filterGoods('all')}
          type="button"
          data-cy="all-button"
        >
          Load all goods
        </button>

        <button
          className="button is-success"
          onClick={() => filterGoods('first-five')}
          type="button"
          data-cy="first-five-button"
        >
          Load 5 first goods
        </button>

        <button
          className="button is-danger"
          onClick={() => filterGoods('red')}
          type="button"
          data-cy="red-button"
        >
          Load red goods
        </button>
      </div>

      {isLoading && <Loader />}

      {!isLoading && errorMessage && (
        <div className="notification is-danger">{errorMessage}</div>
      )}

      {!isLoading && !errorMessage && !isFirstRender && goods.length === 0 && (
        <div className="notification is-danger is-light">
          There is no goods to show.
        </div>
      )}

      {!isLoading && !errorMessage && goods.length > 0 && (
        <GoodsList goods={goods} />
      )}
    </div>
  );
};
