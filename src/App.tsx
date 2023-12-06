import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [selectedGoods, setSelectedGoods] = useState<Good[]>([]);
  const [currentButton, setCurrentButton] = useState('');

  useEffect(() => {
    if (!currentButton) {
      setSelectedGoods([]);
    } else {
      switch (currentButton) {
        case 'all-button':
          getAll().then(setSelectedGoods);
          break;

        case 'first-five-button':
          get5First().then(setSelectedGoods);
          break;

        case 'red-button':
          getRedGoods().then(setSelectedGoods);
          break;

        default:
          setSelectedGoods([]);
      }
    }
  }, [currentButton]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const pressedButton = event.currentTarget.dataset.cy || '';

    setCurrentButton(pressedButton);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        onClick={handleClick}
        type="button"
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        onClick={handleClick}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        onClick={handleClick}
        type="button"
        data-cy="red-button"
      >
        Load red goods
      </button>

      <GoodsList goods={selectedGoods} />
    </div>
  );
};
