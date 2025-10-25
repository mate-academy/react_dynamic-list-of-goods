import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC<{}> = () => {
  const [allGoods, setAllGoods] = React.useState<Good[]>([]);
  const [errors, setErrors] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  // render errors conditionally inside the JSX below

  const handleLoadAllGoods = async () => {
    setLoading(true);
    setErrors(null);
    try {
      const goods = await getAll();

      setAllGoods(goods);
    } catch (error) {
      setErrors((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleLoad5FirstGoods = async () => {
    setLoading(true);
    setErrors(null);
    try {
      const goods = await get5First();

      setAllGoods(goods);
    } catch (error) {
      setErrors((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadRedGoods = async () => {
    setLoading(true);
    setErrors(null);
    try {
      const goods = await getRed();

      setAllGoods(goods);
    } catch (error) {
      setErrors((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      {errors && <p className="App__error">{errors}</p>}
      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleLoadAllGoods()}
        disabled={loading}
      >
        Load all goods
      </button>
      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleLoad5FirstGoods()}
        disabled={loading}
      >
        Load 5 first goods
      </button>
      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleLoadRedGoods()}
        disabled={loading}
      >
        Load red goods
      </button>
      <GoodsList goods={allGoods} />
    </div>
  );
};
