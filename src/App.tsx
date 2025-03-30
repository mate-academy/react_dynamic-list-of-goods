import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  // Explicitly typing the state as Good[] to fix the type issue
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAllGoods = () => {
    getAll().then(setGoods);
  };

  const loadFirst5Goods = () => {
    get5First().then(setGoods);
  };

  const loadRedGoods = () => {
    getRedGoods().then(setGoods);
  };

  return React.createElement(
    'div',
    { className: 'App' },
    React.createElement('h1', null, 'Dynamic list of Goods'),
    React.createElement(
      'button',
      { type: 'button', 'data-cy': 'all-button', onClick: loadAllGoods },
      'Load all goods',
    ),
    React.createElement(
      'button',
      {
        type: 'button',
        'data-cy': 'first-five-button',
        onClick: loadFirst5Goods,
      },
      'Load 5 first goods',
    ),
    React.createElement(
      'button',
      { type: 'button', 'data-cy': 'red-button', onClick: loadRedGoods },
      'Load red goods',
    ),
    React.createElement(GoodsList, { goods }), // Passing the goods state to the GoodsList component
  );
};
