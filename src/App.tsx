import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([])

  const fetchAllData = () => {
    getAll().then(setGoods);
  }

  const fetchRedData = () => {
    getRedGoods().then(setGoods);
  }

  const fetchFiveData = () => {
    get5First().then(setGoods);
  }

  useEffect(() => {
    fetchAllData();
  }, [])

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
       type="button"
       data-cy="all-button"
       onClick={fetchAllData}
       >
        Load all goods
      </button>

      <button
       type="button"
       data-cy="first-five-button"
       onClick={fetchFiveData}
      >
        Load 5 first goods
      </button>

      <button
       type="button"
       data-cy="red-button"
       onClick={fetchRedData}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  )
};
