import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [listOfGoods, setListOfGoods] = useState<Good[]>([]);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
    setListOfGoods([]);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      {hasError && <p data-cy="error-message">Something went wrong</p>}

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          setHasError(false);

          getAll()
            .then(goodsFromServer => {
              setListOfGoods(goodsFromServer);
            })
            .catch(handleError);
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          setHasError(false);

          get5First().then(setListOfGoods).catch(handleError);
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          setHasError(false);

          getRedGoods().then(setListOfGoods).catch(handleError);
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={listOfGoods} />
    </div>
  );
};
