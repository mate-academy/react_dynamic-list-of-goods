import React, { useCallback, useState } from 'react';
import { Good } from './types/Good';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import './App.scss';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const fetchData = useCallback(async (
    fetchFunction: () => Promise<Good[]>,
  ) => {
    const fetchedGoods = await fetchFunction();

    setGoods(fetchedGoods);
  }, []);
  const buttons = [
    {
      label: 'Load all goods',
      fetchFunction: goodsAPI.getAll,
      dataCy: 'all-button',
    },
    {
      label: 'Load 5 first goods',
      fetchFunction: goodsAPI.get5First,
      dataCy: 'first-five-button',
    },
    {
      label: 'Load red goods',
      fetchFunction: goodsAPI.getRedGoods,
      dataCy: 'red-button',
    },
  ];

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      {buttons.map(({ label, fetchFunction, dataCy }) => (
        <button
          key={dataCy}
          type="button"
          onClick={() => fetchData(fetchFunction)}
          data-cy={dataCy}
        >
          {label}
        </button>
      ))}
      <GoodsList goods={goods} />
    </div>
  );
};
