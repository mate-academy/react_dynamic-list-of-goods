import React, { useState, useCallback } from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  const onClickAllButton = useCallback(async () => {
    const goodsFromServer = await getAll();

    setVisibleGoods(goodsFromServer);
  }, []);

  const onClickLoad5Button = useCallback(async () => {
    const goodsFromServer = await get5First();

    setVisibleGoods(goodsFromServer);
  }, []);

  const onClickLoadRedGoods = useCallback(async () => {
    const goodsFromServer = await getRedGoods();

    setVisibleGoods(goodsFromServer);
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={onClickAllButton}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={onClickLoad5Button}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={onClickLoadRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
