import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [buttonClicked, setButtonClicked] = useState('');
  const allButton = 'all-button';
  const fiveButton = 'first-five-button';
  const redButton = 'red-button';

  useEffect(() => {
    switch (buttonClicked) {
      case allButton:
        getAll().then(setGoods);
        break;
      case fiveButton:
        get5First().then(setGoods);
        break;
      case redButton:
        getRedGoods().then(setGoods);
        break;
      default:
    }
  }, [buttonClicked]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setButtonClicked(allButton)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setButtonClicked(fiveButton)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setButtonClicked(redButton)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
