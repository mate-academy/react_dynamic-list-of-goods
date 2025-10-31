import * as React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = React.useState<Good[]>([]);

  const handleLoadAll = () => {
    getAll()
      .then(setGoods)
      .catch((error) => {
        console.error('Error loading all goods:', error);
      });
  };

  const handleLoad5First = () => {
    get5First()
      .then(setGoods)
      .catch((error) => {
        console.error('Error loading first 5 goods:', error);
      });
  };

  const handleLoadRedGoods = () => {
    getRedGoods()
      .then(setGoods)
      .catch((error) => {
        console.error('Error loading red goods:', error);
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button 
        type="button" 
        data-cy="all-button"
        onClick={handleLoadAll}
      >
        Load all goods
      </button>

      <button 
        type="button" 
        data-cy="first-five-button"
        onClick={handleLoad5First}
      >
        Load 5 first goods
      </button>

      <button 
        type="button" 
        data-cy="red-button"
        onClick={handleLoadRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
