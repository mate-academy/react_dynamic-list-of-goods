import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goodsList, setGoodsList] = useState<Good[]>([]);

  const hendlerOnClick = useCallback(async (
    callback: () => Promise<Good[]>,
  ) => {
    try {
      const goods = await callback();

      setGoodsList(goods);
    } catch (error) {
      if (error instanceof Error) {
        // eslint-disable-next-line no-console
        console.log(`${error.name} - JSON is not valid `);
      }
    }
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => hendlerOnClick(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => hendlerOnClick(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => hendlerOnClick(getRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={goodsList} />
    </div>
  );
};
