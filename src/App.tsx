import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRed } from './api/goods';

enum Filter {
  Five,
  Red,
  All,
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [filter, setFilter] = useState<Filter | null>(null);

  useEffect(() => {
    switch (filter) {
      case Filter.Five:
        get5First().then(setGoods);
        break;

      case Filter.Red:
        getRed().then(setGoods);
        break;

      case Filter.All:
        getAll().then(setGoods);
        break;

      default:
        setGoods([]);
    }
  }, [filter]);

  return (
    <div
      className={
        'App section is-flex '
        + 'is-flex-direction-column is-align-items-center'
      }
    >
      <h1 className="title is-2 block">Dynamic list of Goods</h1>

      <div className="block columns">
        <div className="column">
          <button
            type="button"
            data-cy="all-button"
            className="button is-info"
            onClick={() => setFilter(Filter.All)}
          >
            Load all goods
          </button>
        </div>

        <div className="column">
          <button
            type="button"
            data-cy="first-five-button"
            className="button is-link"
            onClick={() => setFilter(Filter.Five)}
          >
            Load 5 first goods
          </button>
        </div>

        <div className="column">
          <button
            type="button"
            data-cy="red-button"
            className="button is-danger"
            onClick={() => setFilter(Filter.Red)}
          >
            Load red goods
          </button>
        </div>
      </div>

      <GoodsList goods={goods} />
    </div>
  );
};
