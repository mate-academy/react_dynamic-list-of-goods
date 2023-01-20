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
    loadId: Exclude<Load, Load.None>,
  ) => {
    const goodsToLoad = {
      [Load.All]: getAll,
      [Load.First5]: get5First,
      [Load.Red]: getRedGoods,
    }[loadId];

    if (loadId !== loaded) {
      setGoods(await goodsToLoad());
      setLoaded(loadId);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => loadGoods(Load.All)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => loadGoods(Load.First5)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => loadGoods(Load.Red)}
      >
        Load red goods
      </button>

      {goods.length > 0 && (
        <GoodsList goods={goods} />
      )}
    </div>
  );
};
