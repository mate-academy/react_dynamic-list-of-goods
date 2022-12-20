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
        case 'all-button':
          setGoods(await getAll());

          return;

        case 'first-five-button':
          setGoods(await get5First());

          return;

        case 'red-button':
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

  const onButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (clickedButton !== event.currentTarget.id) {
      setClickedButton(event.currentTarget.id);
      loadGoods();
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
        id="all-button"
        onClick={onButtonClick}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        id="first-five-button"
        onClick={onButtonClick}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        id="red-button"
        onClick={onButtonClick}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
