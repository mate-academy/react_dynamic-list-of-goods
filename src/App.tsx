import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { get5First, getAll, getRedGoods } from './api/goods';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>('');

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        onClick={async () => {
          try {
            const dataAll = await getAll();
            setGoods(dataAll);
            setErrorMessage(null);
          } catch (error) {
            setErrorMessage('Failed to load goods. Please try again later.');
            setGoods([]);
          }
        }}
        type="button"
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={async () => {
          try {
            const dataFive = await get5First();
            setGoods(dataFive);
            setErrorMessage(null);
          } catch (error) {
            setErrorMessage('Failed to load goods. Please try again later.');
            setGoods([]);
          }
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={async () => {
          try {
            const dataRed = await getRedGoods();
            setGoods(dataRed);
            setErrorMessage(null);
          } catch (error) {
            setErrorMessage('Failed to load goods. Please try again later.');
            setGoods([]);
          }
        }}
      >
        Load red goods
      </button>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
