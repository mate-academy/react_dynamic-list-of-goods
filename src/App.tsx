import React, { useCallback, useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  const listOfGoods = useCallback(() => {
    getAll()
      .then(goodsFromServer => {
        setVisibleGoods(goodsFromServer);
      });
  }, []);
  const listOfFiveGoods = useCallback(() => {
    get5First()
      .then(goodsFromServer => {
        setVisibleGoods(goodsFromServer);
      });
  }, []);
  const listOfRedGoods = useCallback(() => {
    getRedGoods()
      .then(goodsFromServer => {
        setVisibleGoods(goodsFromServer);
      });
  }, []);

  useEffect(() => {
    setVisibleGoods([]);
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => listOfGoods()}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => listOfFiveGoods()}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => listOfRedGoods()}
      >
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
