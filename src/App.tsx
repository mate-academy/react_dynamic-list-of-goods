import React, { useState, useEffect } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

enum VisibList {
  empty = 'empty',
  all = 'all',
  five = 'five',
  red = 'red',
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [visibleList, setVisibleList] = useState<VisibList>(VisibList.empty);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (visibleList === VisibList.empty) {
      return;
    }

    if (visibleList === VisibList.all) {
      getAll()
        .then(setGoods)
        .catch(() => setError('Failed to load data'));
    }

    if (visibleList === VisibList.five) {
      get5First()
        .then(setGoods)
        .catch(() => setError('Failed to load data'));
    }

    if (visibleList === VisibList.red) {
      getRedGoods()
        .then(setGoods)
        .catch(() => setError('Failed to load data'));
    }
  }, [visibleList]);

  const handleSwitchAll = () => {
    return setVisibleList(VisibList.all);
  };

  const handleSwitchFive = () => {
    return setVisibleList(VisibList.five);
  };

  const handleSwitchRed = () => {
    return setVisibleList(VisibList.red);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleSwitchAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleSwitchFive}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleSwitchRed}>
        Load red goods
      </button>

      {error && <p role="alert">{error}</p>}
      <GoodsList goods={goods} />
    </div>
  );
};
