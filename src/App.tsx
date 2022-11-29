import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [visiableGoods, setVisiableGoods] = useState<Good[]>([]);
  const [showGoods, setShowGoods] = useState(false);

  const handelLoadAllGoods = () => {
    getAll()
      .then(result => setVisiableGoods(result))
      .catch(() => setShowGoods(false))
      .finally(() => setShowGoods(true));
  };

  const handelLoad5FirstGoods = () => {
    get5First()
      .then(result => setVisiableGoods(result))
      .catch(() => setShowGoods(false))
      .finally(() => setShowGoods(true));
  };

  const handelLoadRedGoods = () => {
    getRedGoods()
      .then(result => setVisiableGoods(result))
      .catch(() => setShowGoods(false))
      .finally(() => setShowGoods(true));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        className="button is-loading"
        type="button"
        data-cy="all-button"
        onClick={handelLoadAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handelLoad5FirstGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handelLoadRedGoods}
      >
        Load red goods
      </button>
      {showGoods && <GoodsList goods={visiableGoods} />}
    </div>
  );
};
