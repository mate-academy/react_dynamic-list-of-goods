import { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        onClick={() => {
          getAll().then(setGoods);
        }}
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        type="button"
        onClick={() => {
          get5First().then(setGoods);
        }}
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        onClick={() => {
          getRedGoods().then(setGoods);
        }}
        data-cy="red-button"
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
