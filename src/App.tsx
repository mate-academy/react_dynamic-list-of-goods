import React, { useEffect, useState } from 'react';
import { get5First, getAll, getRedGoods } from './api/goods';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

type SortType = 'All' | 'FirstFive' | 'OnlyRed' | '';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [sortType, setSortType] = useState<SortType>('');

  const sortGoods = () => {
    switch (sortType) {
      case 'All':
        getAll().then(goodsFromServer => setGoods(goodsFromServer));
        break;
      case 'FirstFive':
        get5First().then(goodsFromServer => setGoods(goodsFromServer));
        break;
      case 'OnlyRed':
        getRedGoods().then(goodsFromServer => setGoods(goodsFromServer));
        break;
      default:
        setGoods([]);
    }
  };

  useEffect(() => {
    sortGoods();
  }, [sortType]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setSortType('All')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setSortType('FirstFive')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setSortType('OnlyRed')}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
