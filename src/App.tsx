import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

enum SelectedBy {
  All,
  FiveFirst,
  RedGoods,
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const select = useCallback(async (selection: SelectedBy) => {
    let selected;

    switch (selection) {
      case SelectedBy.FiveFirst:
        selected = await get5First();
        setGoods(selected);
        break;
      case SelectedBy.RedGoods:
        selected = await getRedGoods();
        setGoods(selected);
        break;
      case SelectedBy.All:
      default:
        selected = await getAll();
        setGoods(selected);
        break;
    }
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => select(SelectedBy.All)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => select(SelectedBy.FiveFirst)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => select(SelectedBy.RedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
