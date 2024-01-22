import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './components/GoodList/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

enum Action {
  All = 'all',
  Show = 'show-first',
  Color = 'red',
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  function getLoadGoods(action: Action) {
    switch (action) {
      case Action.All:
        getAll().then(setGoods);
        break;

      case Action.Show:
        get5First().then(setGoods);
        break;

      case Action.Color:
        getRedGoods(Action.Color).then(setGoods);
        break;

      default:
        getAll().then(setGoods);
    }
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => getLoadGoods(Action.All)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => getLoadGoods(Action.Show)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => getLoadGoods(Action.Color)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
