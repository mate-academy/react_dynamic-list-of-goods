import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { FilterParam } from './types/FilterParam';

import { get5First, getAll, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const setFilterParam = async (param: FilterParam) => {
    let filteredArray: Good[];

    switch (param) {
      case FilterParam.all:
        filteredArray = await getAll();
        break;

      case FilterParam.first5:
        filteredArray = await get5First();
        break;

      case FilterParam.red:
        filteredArray = await getRedGoods();
        break;

      default:
        filteredArray = [];
    }

    setGoods(filteredArray);
  };

  const handleFilterParam = (event:React.MouseEvent<HTMLButtonElement>) => {
    const { dataset } = event.currentTarget;

    setFilterParam(dataset.cy as FilterParam);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleFilterParam}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFilterParam}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleFilterParam}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
