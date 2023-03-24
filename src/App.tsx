import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { getFiveFirst, getAll, getRed } from './api/goods';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const mountedRef = useRef(false);

  useEffect(() => {
    let mounted = true;

    mountedRef.current = true;

    const load = async (): Promise<void> => {
      const newGoods = await getAll();

      if (mounted) {
        setGoods(newGoods);
      }
    };

    load();

    return () => {
      mounted = false;
      mountedRef.current = false;
    };
  }, []);

  const handleButtonAllClicked = useCallback(async (): Promise<void> => {
    const newGoods = await getAll();

    if (mountedRef.current) {
      setGoods(newGoods);
    }
  }, []);

  const handleButtonFiveClicked = useCallback(async (): Promise<void> => {
    const newGoods = await getFiveFirst();

    if (mountedRef.current) {
      setGoods(newGoods);
    }
  }, []);

  const handleButtonRedClicked = useCallback(async (): Promise<void> => {
    const newGoods = await getRed();

    if (mountedRef.current) {
      setGoods(newGoods);
    }
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleButtonAllClicked}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleButtonFiveClicked}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleButtonRedClicked}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
