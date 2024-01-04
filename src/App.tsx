import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export enum FilteringTypes {
  ALL,
  FIRST_FIVE,
  COLOR_RED,
}

export const App: React.FC = () => {
  const [filteringBy, setFilteringBy] = useState<FilteringTypes | null>(null);
  const [visiblGoods, setVisiblGoods] = useState<Good[] | []>([]);

  useEffect(() => {
    switch (filteringBy) {
      case FilteringTypes.ALL:
        getAll().then(setVisiblGoods);
        break;
      case FilteringTypes.FIRST_FIVE:
        get5First().then(setVisiblGoods);
        break;
      case FilteringTypes.COLOR_RED:
        getRedGoods().then(setVisiblGoods);
        break;
      default:
        break;
    }
  }, [filteringBy]);

  window.console.log('render app');

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setFilteringBy(FilteringTypes.ALL)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setFilteringBy(FilteringTypes.FIRST_FIVE)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setFilteringBy(FilteringTypes.COLOR_RED)}
      >
        Load red goods
      </button>

      {filteringBy !== null && <GoodsList goods={visiblGoods} />}
    </div>
  );
};
