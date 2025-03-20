import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';



export const App: React.FC = () => {
  const [allList, setAllList] = useState([]);

  const loadAll = () => {
    getAll().then(setAllList)
      .catch(error => console.error('Error loading all goods:', error));
  };

  const load5 = () => {
    get5First().then(setAllList)
      .catch(error=> console.error('Error loading five goods', error));
  };

  const loadRed = () => {
    getRedGoods().then(setAllList)
      .catch(error => console.error('Error loading the red goods', error));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadAll}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={load5}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRed}>
        Load red goods
      </button>
      <GoodsList goods={allList} />
    </div>
  );
};
