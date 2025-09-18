import React, { useState } from 'react';
import './App.scss';
import GoodsList from './GoodsList';
import { Good } from './types/Good';

import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [messageError, setMessageError] = useState<null | string>(null);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={async () => {
          try {
            const data = await goodsAPI.getAll();

            setGoods(data);
            setMessageError(null);
          } catch (err) {
            setMessageError('Failed to load goods. Please try again.');
            setGoods([]);
          }
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={async () => {
          try {
            const data = await goodsAPI.get5First();

            setGoods(data);
            setMessageError(null);
          } catch (err) {
            setMessageError('Failed to load goods. Please try again.');
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
            const data = await goodsAPI.getRedGoods();

            setGoods(data);
            setMessageError(null);
          } catch (err) {
            setMessageError('Failed to load goods. Please try again.');
            setGoods([]);
          }
        }}
      >
        Load red goods
      </button>

      {messageError && (
        <div style={{ color: 'red', marginTop: '10px' }}>{messageError}</div>
      )}

      <GoodsList goods={goods} />
    </div>
  );
};
