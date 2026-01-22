import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  function handleAllGoods() {
    getAll()
      .then(goodsList => {
        setGoods(goodsList);
        setErrorMessage('');
      })
      .catch(() => setErrorMessage('Error!'));
  }

  function handleGoodsColor() {
    getRedGoods()
      .then(filteredList => {
        setGoods(filteredList);
        setErrorMessage('');
      })
      .catch(() => setErrorMessage('Error!'));
  }

  function handleGoodsQuantity() {
    get5First()
      .then(first5 => {
        setGoods(first5);
        setErrorMessage('');
      })
      .catch(() => setErrorMessage('Error!'));
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleGoodsQuantity}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleGoodsColor}>
        Load red goods
      </button>

      {errorMessage && <p>{errorMessage}</p>}
      {goods.length > 0 && <GoodsList goods={goods} />}
    </div>
  );
};
