import React, { useState } from 'react';
import './App.scss';
import { useQueries } from '@tanstack/react-query';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

type SelectedGoods = 'allGoods' | 'firstFiveGoods' | 'allRedGoods';

export const App: React.FC = () => {
  const [goodsSelect, setGoodsSelect] = useState<SelectedGoods>('allGoods');
  const results = useQueries({
    queries: [
      { queryKey: ['allGoods'], queryFn: getAll, staleTime: 0 },
      { queryKey: ['first5'], queryFn: get5First, staleTime: 0 },
      { queryKey: ['allRed'], queryFn: getRedGoods, staleTime: 0 },
    ],
  });

  const isLoading = results.some((query) => query.isLoading);
  const isError = results.some((query) => query.isError);

  if (isError) {
    return <div>Error occurred</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const [{ data: allGoods },
    { data: firstFiveGoods },
    { data: allRedGoods },
  ] = results;

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setGoodsSelect('allGoods')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setGoodsSelect('firstFiveGoods')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setGoodsSelect('allRedGoods')}
      >
        Load red goods
      </button>

      {goodsSelect === 'allGoods' && <GoodsList goods={allGoods} />}
      {goodsSelect === 'firstFiveGoods'
          && (
            <GoodsList
              goods={firstFiveGoods}
            />
          )}
      {goodsSelect === 'allRedGoods' && <GoodsList goods={allRedGoods} />}
    </div>
  );
};
