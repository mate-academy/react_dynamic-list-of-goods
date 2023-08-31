import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Button } from './types/Button';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [button, setButton] = useState('');

  useEffect(() => {
    switch (button) {
      case Button.all:
        getAll().then(setGoods);
        break;

      case Button.five:
        get5First().then(setGoods);
        break;

      case Button.red:
        getRedGoods().then(setGoods);
        break;

      default:
        setGoods([]);
        break;
    }
  }, [button]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setButton(Button.all)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setButton(Button.five)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setButton(Button.red)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
