import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errors, setErrors] = useState<string | null>(null);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          getAll()
            .then(data => {
              setGoods(data);
              setErrors(null);
            })
            .catch(error => setErrors(`Request failed: ${error.message}`));
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          get5First()
            .then(data => {
              setGoods(data);
              setErrors(null);
            })
            .catch(error => setErrors(`Request failed: ${error.message}`));
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          getRedGoods()
            .then(data => {
              setGoods(data);
              setErrors(null);
            })
            .catch(error => setErrors(`Request failed: ${error.message}`));
        }}
      >
        Load red goods
      </button>
      {errors && <div className="error">{errors}</div>}
      <GoodsList goods={goods} />
    </div>
  );
};
