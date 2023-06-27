import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [selectedGoods, setSelectedGoods] = useState<Good[]>([]);

  const handleClick = async (func: () => Promise<Good[]>) => {
    func().then(goods => setSelectedGoods(goods));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => (handleClick(getAll))}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => (handleClick(get5First))}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => (handleClick(getRedGoods))}
      >
        Load red goods
      </button>

      <GoodsList goods={selectedGoods} />
    </div>
  );
};
