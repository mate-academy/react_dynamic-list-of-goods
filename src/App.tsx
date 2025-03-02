import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { get5First, getAll, getRedGoods } from './api/goods';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handlebuttonClick = (id: string) => {
    if (id === 'All') {
      getAll().then(setGoods);
    } else if (id === 'LoadFive') {
      get5First().then(setGoods);
    } else if (id === 'LoadRed') {      
      getRedGoods().then(setGoods);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        id="All"
        type="button"
        data-cy="all-button"
        onClick={event => handlebuttonClick(event.currentTarget.id)}
      >
        Load all goods
      </button>

      <button
        id="LoadFive"
        type="button"
        data-cy="first-five-button"
        onClick={event => handlebuttonClick(event.currentTarget.id)}
      >
        Load 5 first goods
      </button>

      <button
        id="LoadRed"
        type="button"
        data-cy="red-button"
        onClick={event => handlebuttonClick(event.currentTarget.id)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
