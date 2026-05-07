import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

const AppComponent: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const hadle5FirstGoods = () => {
    get5First()
      .then(result => setGoods(result))
      .catch(() => alert('Error loading 5 first goods'));
  };

  const handleAllGoods = () => {
    getAll()
      .then(result => setGoods(result))
      .catch(() => alert('Error loading goods'));
  };

  const handleAllRedGoods = () => {
    getRedGoods()
      .then(result => setGoods(result))
      .catch(() => alert('Error loading red goods'));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={hadle5FirstGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleAllRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

export const App = React.memo(AppComponent);
