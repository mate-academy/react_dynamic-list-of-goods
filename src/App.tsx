import React, { useCallback, useState } from 'react';
import { get5First, getAll, getRedGoods } from './api/goods';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoadClick = useCallback(
    async (fetchGoodsFunc: () => Promise<Good[]>) => {
      try {
        setErrorMessage('');

        const loadedGoods = await fetchGoodsFunc();

        setGoods(loadedGoods);
        setIsInitialized(true);
      } catch (error) {
        setGoods([]);
        setErrorMessage(error.message);
      }
    },
    [],
  );

  return (
    <div className="App">
      <div className="App__content">
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          className="button"
          data-cy="all-button"
          onClick={() => handleLoadClick(getAll)}
        >
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={() => handleLoadClick(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          data-cy="red-button"
          onClick={() => handleLoadClick(getRedGoods)}
        >
          Load red goods
        </button>

        {errorMessage && <p>{errorMessage}</p>}

        {goods.length
          ? <GoodsList goods={goods} />
          : isInitialized && <p>There are no goods</p>}
      </div>
    </div>
  );
};
