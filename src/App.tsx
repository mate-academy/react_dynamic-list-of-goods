import { useState, FC } from 'react';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

import { Good } from './types/Good';
import './App.scss';

enum Load {
  None,
  All,
  First5,
  Red,
}

export const App: FC = () => {
  const [goods, setGoods] = useState([] as Good[]);
  const [loaded, setLoaded] = useState(Load.None);

  const loadGoods = async (
    goodsToLoad: () => Promise<Good[]>,
    loadedId: Load,
  ) => {
    if (loadedId !== loaded) {
      setGoods(await goodsToLoad());
      setLoaded(loadedId);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => loadGoods(getAll, Load.All)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => loadGoods(get5First, Load.First5)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => loadGoods(getRedGoods, Load.Red)}
      >
        Load red goods
      </button>

      {goods.length > 0 && (
        <GoodsList goods={goods} />
      )}
    </div>
  );
};
