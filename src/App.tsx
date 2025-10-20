import React, { useState } from 'react';
import cn from 'classnames';
import './App.scss';
import { GoodsList } from './GoodsList';
import type { Good } from './types/Good';
import { getAllGoods, getFirstFiveGoods, getRedGoods } from './api/goods';

enum Filter {
  All = 'all',
  FirstFive = 'firstFive',
  Red = 'red',
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<Filter | null>(null);

  const handleLoadGoods = async (loader: () => Promise<Good[]>, filter: Filter) => {
    try {
      setLoadError(null);
      setIsLoading(true);
      setActiveFilter(filter);
      const data = await loader();
      setGoods(data);
    } catch (e) {
      setLoadError((e as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <h1 className="App__title">Dynamic list of Goods</h1>

      <div className="App__buttons">
        <button
          type="button"
          data-cy="all-button"
          onClick={() => handleLoadGoods(getAllGoods, Filter.All)}
          className={cn('App__button', { 'App__button--active': activeFilter === Filter.All })}
          disabled={isLoading}
        >
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={() => handleLoadGoods(getFirstFiveGoods, Filter.FirstFive)}
          className={cn('App__button', { 'App__button--active': activeFilter === Filter.FirstFive })}
          disabled={isLoading}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          data-cy="red-button"
          onClick={() => handleLoadGoods(getRedGoods, Filter.Red)}
          className={cn('App__button', { 'App__button--active': activeFilter === Filter.Red })}
          disabled={isLoading}
        >
          Load red goods
        </button>
      </div>

      {isLoading && <p data-cy="loading">Loading…</p>}
      {loadError && (
        <p className="App__error" data-cy="error">
          {loadError}
        </p>
      )}

      <GoodsList goods={goods} />
    </div>
  );
};
