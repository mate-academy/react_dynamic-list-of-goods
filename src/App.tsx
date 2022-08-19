import React, { useCallback, useState } from 'react';
import cn from 'classnames';
import './App.scss';
import { GoodsList } from './GoodsList';
import 'bulma';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState('');

  const handlerGetGoods = useCallback(async (amount: string) => {
    setIsLoading(amount);
    switch (amount) {
      case 'all':
        getAll().then(allGoods => {
          setGoods(allGoods);
          setIsLoading('');
        });
        break;

      case 'five':
        get5First().then(firstFiveGoods => {
          setGoods(firstFiveGoods);
          setIsLoading('');
        });
        break;

      case 'red':
        getRedGoods().then(redGoods => {
          setGoods(redGoods);
          setIsLoading('');
        });
        break;

      default:
        break;
    }
  }, []);

  return (
    <div className="App p-5">
      <h1>Dynamic list of Goods</h1>

      <button
        className={cn('button is-primary',
          { 'is-loading': isLoading === 'all' })}
        type="button"
        data-cy="all-button"
        onClick={() => handlerGetGoods('all')}
      >
        Load all goods
      </button>

      <button
        className={cn('button is-info',
          { 'is-loading': isLoading === 'five' })}
        type="button"
        data-cy="first-five-button"
        onClick={() => handlerGetGoods('five')}
      >
        Load 5 first goods
      </button>

      <button
        className={cn('button is-danger',
          { 'is-loading': isLoading === 'red' })}
        type="button"
        data-cy="red-button"
        onClick={() => handlerGetGoods('red')}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
