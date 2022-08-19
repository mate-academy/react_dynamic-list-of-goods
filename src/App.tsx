import React, { useState, useCallback } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [selectedGoods, setSelectedGoods] = useState<Good[]>([]);
  const [isError, setIsError] = useState(false);

  const handleButtonClick = useCallback(async (func: ()=> Promise<Good[]>) => {
    try {
      func()
        .then(data => setSelectedGoods(data));
    } catch {
      (setIsError(true));
    }
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => (handleButtonClick(getAll))}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => (handleButtonClick(get5First))}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => (handleButtonClick(getRedGoods))}
      >
        Load red goods
      </button>

      {!isError
        ? <GoodsList goods={selectedGoods} />
        : 'Error with API'}
    </div>
  );
};
