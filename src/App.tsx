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
  const [error, setError] = useState(false);

  const handleButtonClick = (id: string) => {
    if (id === 'All') {
      getAll()
        .then(response => {
          setGoods(response);
          setError(false);
        })
        .catch(() => setError(true));
    } else if (id === 'LoadFive') {
      get5First()
        .then(response => {
          setGoods(response);
          setError(false);
        })
        .catch(() => setError(true));
    } else if (id === 'LoadRed') {
      getRedGoods()
        .then(response => {
          setGoods(response);
          setError(false);
        })
        .catch(() => setError(true));
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        id="All"
        type="button"
        data-cy="all-button"
        onClick={event => handleButtonClick(event.currentTarget.id)}
      >
        Load all goods
      </button>

      <button
        id="LoadFive"
        type="button"
        data-cy="first-five-button"
        onClick={event => handleButtonClick(event.currentTarget.id)}
      >
        Load 5 first goods
      </button>

      <button
        id="LoadRed"
        type="button"
        data-cy="red-button"
        onClick={event => handleButtonClick(event.currentTarget.id)}
      >
        Load red goods
      </button>
      {goods.length > 0 && !error && <GoodsList goods={goods} />}
    </div>
  );
};
