import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

type Filter = 'all-button' | 'first-five-button' | 'red-button';

export const App: React.FC = () => {
  const [filter, setFilter] = useState<Filter>();
  const [goodsList, setGoodsList] = useState<Good[]>([]);

  useEffect(() => {
    switch (filter) {
      case 'all-button':
        getAll().then(goods => setGoodsList(goods));
        break;

      case 'first-five-button':
        get5First().then(firstFiveGoods => setGoodsList(firstFiveGoods));
        break;

      case 'red-button':
        getRedGoods().then(redGoods => setGoodsList(redGoods));
        break;

      default: break;
    }
  }, [filter]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const newFilter = event.currentTarget.dataset.cy as Filter;

    if (newFilter) {
      setFilter(newFilter);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleClick}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={handleClick}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleClick}>
        Load red goods
      </button>

      <GoodsList goods={goodsList} />
    </div>
  );
};
