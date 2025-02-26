import { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>('');

  const handleGetAll = async () => {
    try {
      const goods = await getAll();

      setVisibleGoods(goods);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage('Not possible to load all goods');
    }
  };

  const handleGet5First = async () => {
    try {
      const goods = await get5First();

      setVisibleGoods(goods);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage('Not possible to load the 5 first goods');
    }
  };

  const handleGetRedGoods = async () => {
    try {
      const goods = await getRedGoods();

      setVisibleGoods(goods);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage('Not possible to load red goods');
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleGetAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleGet5First}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleGetRedGoods}>
        Load red goods
      </button>

      {errorMessage && <p>{errorMessage}</p>}

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
