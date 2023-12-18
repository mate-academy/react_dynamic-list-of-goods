import React, { useState, useEffect } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [buttonPressed, setButtonPressed] = useState('');

  useEffect(() => {
    const loadGoods = async () => {
      let data;

      switch (buttonPressed) {
        case ('all-button'):
          data = await getAll();
          break;
        case ('first-five-button'):
          data = await get5First();
          break;
        case ('red-button'):
          data = await getRed();
          break;
        default:
          setGoods([]);

          return;
      }

      setGoods(data);
    };

    loadGoods();
  }, [buttonPressed]);

  const handleButtonClick = (button: string) => () => {
    setButtonPressed(button);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleButtonClick('all-button')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleButtonClick('first-five-button')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleButtonClick('red-button')}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
