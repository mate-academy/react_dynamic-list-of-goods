import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = React.useState<Good[]>([]);

  const handleClick = (typeOfFetch: string) => {
    switch (typeOfFetch) {
      case 'All':
        return () => getAll().then(goodsList => setGoods(goodsList));
      case '5 first':
        return () => get5First().then(goodsList => setGoods(goodsList));
      case 'red':
        return () => getRedGoods().then(goodsList => setGoods(goodsList));
      default:
        return () => setGoods([]);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleClick('All')}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleClick('5 first')}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleClick('red')}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
