import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [clickedButton, setClickedButton] = useState('');

  const loadGoods = async () => {
    try {
      switch (clickedButton) {
        case 'all':
          setGoods(await getAll());

          return;

        case 'five':
          setGoods(await get5First());

          return;

        case 'red':
          setGoods(await getRedGoods());

          return;

        default:
          setGoods([]);

          return;
      }
    } catch (error) {
      setGoods([]);
    }
  };

  useEffect(() => {
    loadGoods();
  }, [clickedButton]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          setClickedButton('all');
          loadGoods();
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          setClickedButton('five');
          loadGoods();
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          setClickedButton('red');
          loadGoods();
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
