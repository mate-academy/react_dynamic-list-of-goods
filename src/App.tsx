import { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import type { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export enum PreferedGoods {
  All = 'all',
  FirstFive = 'firstFive',
  Red = 'red',
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [showPreferedGoods, setShowPreferedGoods] = useState(PreferedGoods.All);

  const [, setHasError] = useState(false);

  const loadGoods = async (func: typeof getAll) => {
    try {
      const goodsFromServer = await func();

      setGoods(goodsFromServer);
    } catch (error) {
      setHasError(true);
    }
  };

  useEffect(() => {
    switch (showPreferedGoods) {
      case PreferedGoods.All:
        loadGoods(getAll);
        break;

      case PreferedGoods.FirstFive:
        loadGoods(get5First);
        break;

      case PreferedGoods.Red:
        loadGoods(getRedGoods);
        break;

      default:
        loadGoods(getAll);
        break;
    }
  }, [showPreferedGoods]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setShowPreferedGoods(PreferedGoods.All)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setShowPreferedGoods(PreferedGoods.FirstFive)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setShowPreferedGoods(PreferedGoods.Red)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
