import React, { useState } from 'react';
import './App.scss';
import { useQuery } from '@tanstack/react-query';
import { GoodsList } from './GoodsList';

import { getGoods, QueryTypes } from './api/goods';

export const App: React.FC = () => {
  const [
    goodsSelect,
    setGoodsSelect,
  ] = useState<QueryTypes>(QueryTypes.allGoods);
  const {
    data: goods,
    isError,
    isLoading,
  } = useQuery(
    ['goods', goodsSelect],
    () => getGoods(goodsSelect),
  );

  if (isError) {
    return <div>Error occurred</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setGoodsSelect(QueryTypes.allGoods)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setGoodsSelect(QueryTypes.firstFiveGoods)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setGoodsSelect(QueryTypes.allRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
