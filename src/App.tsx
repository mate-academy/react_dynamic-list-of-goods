import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [sort, setSort]  = useState<Good[]>([])

  return (
  <div className="App">
    <h1>Dynamic list of Goods</h1>

    <button 
    type="button" 
    data-cy="all-button"
    onClick= {async() => {
      const allGoods = await getAll();
      setSort(allGoods);
    }}
    >
      Load all goods
    </button>

    <button 
    type="button" 
    data-cy="first-five-button"
    onClick={async () => {
      const firstFive = await get5First();
      setSort(firstFive);
    }}
    >
      Load 5 first goods
    </button>

    <button 
    type="button" 
    data-cy="red-button"
    onClick= {async() => {
      const redGoods = await getRedGoods()
      setSort(redGoods);
    }}
    >
      Load red goods
    </button>

    <GoodsList goods={sort} />
  </div>
);}
