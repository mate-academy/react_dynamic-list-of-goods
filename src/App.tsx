import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goodsList, setGoodsList] = useState<Good[]>([]);

  const handleClick = useCallback(async (callback: () => Promise<Good[]>) => {
    try {
      setGoodsList(await callback());
    } catch (error) {
      if (error instanceof Error) {
        /* eslint no-console: */
        console.log("Goods aren't loaded", error.message);
      }
    }
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleClick(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleClick(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleClick(getRed)}
      >
        Load red goods
      </button>

      <GoodsList goods={goodsList} />
    </div>
  );
};
