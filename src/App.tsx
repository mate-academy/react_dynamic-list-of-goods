import React, { useMemo, useState } from 'react';
import './App.scss';
import { MemorizedGoodList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | []>([]);

  const allGoods = useMemo(() => getAll(), []);

  const firstFiveGoods = useMemo(() => get5First(), []);

  const onlyRedGoods = useMemo(() => getRedGoods(), []);

  const loadAll = () => allGoods.then(setGoods);

  const loadFirstFive = () => firstFiveGoods.then(setGoods);

  const loadOnlyRed = () => onlyRedGoods.then(setGoods);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={loadAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={loadFirstFive}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={loadOnlyRed}
      >
        Load red goods
      </button>

      <MemorizedGoodList goods={goods} />
    </div>
  );
};
