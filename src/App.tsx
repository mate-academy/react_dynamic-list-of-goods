import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [data, setData] = useState<Good[] | null>(null);

  const handleClickAll = async () => {
    const loadData = await getAll();

    setData(loadData);
  };

  const handleClick5First = async () => {
    const loadData = await get5First();
    const sortDataByName = loadData
      .sort((good1, good2) => good1.name.localeCompare(good2.name));

    const firstData = sortDataByName
      .filter((v, i) => ((i < 5) ? v.name : null));

    setData(firstData);
  };

  const handleClickByColor = async () => {
    const loadData = await getRedGoods();
    const filterDataByColor = loadData
      .filter((good) => good.color === 'red');

    setData(filterDataByColor);
  };

  useEffect(() => {
    handleClickAll();
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleClickAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleClick5First}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleClickByColor}
      >
        Load red goods
      </button>

      {data && <GoodsList goods={data} />}
    </div>
  );
};
