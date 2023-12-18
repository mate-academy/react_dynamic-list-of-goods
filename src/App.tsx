import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

type ListType = 'All' | 'Five' | 'Red' | '';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [listType, setListType] = useState<ListType>('');

  useEffect(() => {
    switch (listType) {
      case ('All'):
        getAll().then(List => {
          setGoods(List);
        });
        break;

      case ('Five'):
        get5First().then(List => {
          setGoods(List);
        });
        break;

      case ('Red'):
        getRedGoods().then(List => {
          setGoods(List);
        });
        break;

      default:
        break;
    }
  }, [listType]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setListType('All')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setListType('Five')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setListType('Red')}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
