import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string>('');

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        onClick={() => {
          getAll()
          .then(setGoods)
          .catch(()=>{setError("Please, try again later")});
        }}
        type="button"
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        onClick={() => {
          get5First().then(info => {
            setGoods(info);
          }).catch(()=>{setError("Please, try again later")});;
        }}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        onClick={() => {
          getRedGoods().then(color => {
            setGoods(color);
          }).catch(()=>{setError("Please, try again later")});;
        }}
        type="button"
        data-cy="red-button"
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
      {error}
    </div>
  );
};
