import React, {useState} from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAllGoods = () => {
    getAll()
    .then(allGoods => {
      setGoods(allGoods);
    })
    .catch(error => {
      console.error('Error loading goods:', error);
    });
  };

  const load5first = () => {
    get5First()
    .then(goods => {
      const sortedGoods = goods.slice(0, 5);
      setGoods(sortedGoods);
    })
    .catch(error => {
      console.error('Error loading 5 first goods:', error);
    });
  };

  const loadRedGoods = () => {
    getRedGoods()
    .then(goods => {
      setGoods(goods);
    })
    .catch(error => {
      console.error('Error loading goods:', error);
    });
  };


  return (
  <div className="App">
    <h1>Dynamic list of Goods</h1>

    <button type="button" data-cy="all-button" onClick={loadAllGoods}>
      Load all goods
    </button>

    <button type="button" data-cy="first-five-button" onClick={load5first}>
      Load 5 first goods
    </button>

    <button type="button" data-cy="red-button" onClick={loadRedGoods}>
      Load red goods
    </button>

    <GoodsList goods={goods} />
  </div>
  );
};
