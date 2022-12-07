import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [selectedGood, setSelectedGood] = useState<Good[]>([]);

  const handleClick = async (callback: Promise<Good[]>) => {
    setSelectedGood(await callback);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          handleClick(getAll());
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          handleClick(get5First());
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          getRedGoods().then(redGoods => setSelectedGood(redGoods));
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={selectedGood} />
    </div>
  );
};
