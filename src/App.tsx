import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [sortGods, setSortGods] = useState<Good[]>([]);

  const handleClick = (valueSortGods: () => Promise<Good[]>) => {
    valueSortGods().then(result => {
      setSortGods(result);
    });
  };

  const buttons = [
    {
      title: 'Load all goods',
      methodSort: getAll,
      dataCY: 'all-button',
    },
    {
      title: 'Load 5 first goods',
      methodSort: get5First,
      dataCY: 'first-five-button',
    },
    {
      title: 'Load red goods',
      methodSort: getRedGoods,
      dataCY: 'red-button',
    },
  ];

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      {buttons.map(button => (
        <button
          type="button"
          data-cy={button.dataCY}
          key={button.dataCY}
          onClick={() => handleClick(button.methodSort)}
        >
          {button.title}
        </button>
      ))}

      <GoodsList goods={sortGods} />
    </div>
  );
};
