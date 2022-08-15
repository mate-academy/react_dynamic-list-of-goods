import React, { useState } from 'react';
import 'bulma';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const loadUser = (getGoods: Promise<Good[]>) => {
    setIsLoading(true);
    setGoods([]);

    return getGoods
      .then(goodsFromServer => {
        setGoods(goodsFromServer);
        setHasError(false);
        setIsLoading(false);
      })
      .catch(() => setHasError(true));
  };

  return (
    <div className="App box">
      <h1 className="title">Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        className="button"
        onClick={() => loadUser(getAll())}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        className="button"
        onClick={() => loadUser(get5First())}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        className="button"
        onClick={() => loadUser(getRedGoods())}
      >
        Load red goods
      </button>

      {goods.length > 0 && (
        <GoodsList goods={goods} />
      )}
      {hasError && (
        <div className="App__error">An error occurred when loading users!</div>
      )}
      {isLoading
        && (<div className="App__loading">Loading...</div>)}
    </div>
  );
};
