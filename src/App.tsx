import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [prepareList, setPrepareList] = useState<Good[]>([]);

  const onLoadAll = useCallback(() => {
    getAll()
      .then(setPrepareList);
  }, []);

  const onLoad5First = useCallback(() => {
    get5First()
      .then(setPrepareList);
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={onLoadAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={onLoad5First}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={async () => setPrepareList(await getRedGoods())}
      >
        Load red goods
      </button>

      <GoodsList goods={prepareList} />
    </div>
  );
};
