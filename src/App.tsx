import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

enum Actions {
  All = 'all',
  Five = 'first-five',
  Red = 'red',
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [action, setAction] = useState('');

  useEffect(() => {
    const fetchGoods = async () => {
      switch (action) {
        case Actions.Five:
          setGoods(await get5First());
          break;

        case Actions.Red:
          setGoods(await getRed());
          break;

        case Actions.All:
          setGoods(await getAll());
          break;

        default:
          break;
      }
    };

    if (action) {
      fetchGoods();
    }
  }, [action]);

  const handleClick = (act: string) => {
    setAction(act);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleClick(Actions.All)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleClick(Actions.Five)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleClick(Actions.Red)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
