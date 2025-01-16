import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

// #region Type
enum LoadType {
  ALL = 'all',
  FIRST_FIVE = 'firstFive',
  RED = 'red',
}

interface Button {
  type: 'button' | 'submit' | 'reset' | undefined;
  dataCy: string;
  label: string;
  action: () => void;
}
// #endregion Type

export const App: React.FC = () => {
  // #region State
  const [goods, setGoods] = useState<Good[]>([]);
  const [currentLoad, setCurrentLoad] = useState<LoadType | null>(null);
  // #endregion State

  useEffect(() => {
    if (!currentLoad) {
      return;
    }

    let fetchGoods;

    switch (currentLoad) {
      case LoadType.ALL:
        fetchGoods = getAll();
        break;
      case LoadType.FIRST_FIVE:
        fetchGoods = get5First();
        break;
      case LoadType.RED:
        fetchGoods = getRedGoods();
        break;
      default:
        return;
    }

    fetchGoods.then(setGoods);
  }, [currentLoad]);

  const buttons: Button[] = [
    {
      type: 'button',
      dataCy: 'all-button',
      label: 'Load all goods',
      action: () => setCurrentLoad(LoadType.ALL),
    },
    {
      type: 'button',
      dataCy: 'first-five-button',
      label: 'Load 5 first goods',
      action: () => setCurrentLoad(LoadType.FIRST_FIVE),
    },
    {
      type: 'button',
      dataCy: 'red-button',
      label: 'Load red goods',
      action: () => setCurrentLoad(LoadType.RED),
    },
  ];

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      {buttons.map(button => (
        <button
          type={button.type}
          data-cy={button.dataCy}
          key={button.dataCy}
          onClick={button.action}
        >
          {button.label}
        </button>
      ))}

      <GoodsList goods={goods} />
    </div>
  );
};
