import React, { useState, useEffect } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import * as goodsAPI from './api/goods';

type SelectedType = 'getAll' | 'get5First' | 'getRedGoods' | null;

// import { getAll, get5First, getRedGoods } from './api/goods';
// or

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [selectedGoods, setSelectedGoods] = useState<SelectedType>(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (selectedGoods) {
      setIsLoading(true);
      goodsAPI[selectedGoods]()
        .then(_goods => setGoods(_goods))
        .catch(err => setError(err))
        .finally(() => setIsLoading(false));
    }
  }, [selectedGoods]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setSelectedGoods('getAll')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setSelectedGoods('get5First')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setSelectedGoods('getRedGoods')}
      >
        Load red goods
      </button>

      { !isLoading
        ? <GoodsList goods={goods} />
        : <p>Loading...</p> }

      { error !== null && (
        <p>{`Здається я заблукав! ${error}`}</p>
      )}
    </div>
  );
};
