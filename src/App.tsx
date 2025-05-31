/* eslint-disable no-console */
import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const loadAllGoods = () => {
    setError(null);
    getAll()
      .then(setGoods)
      .catch(err => {
        setError('Failed to load goods. Please try again later.');
        console.error('Error fetching all goods:', err);
      });
  };

  const loadFirst5Goods = () => {
    setError(null);
    get5First()
      .then(setGoods)
      .catch(err => {
        setError('Failed to load the first 5 goods.');
        console.error('Error fetching first 5 goods:', err);
      });
  };

  const loadRedGoods = () => {
    setError(null);
    getRedGoods()
      .then(setGoods)
      .catch(err => {
        setError('Failed to load red goods.');
        console.error('Error fetching red goods:', err);
      });
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
    error
      ? React.createElement('div', { className: 'error-message' }, error)
      : React.createElement(GoodsList, { goods }),
  );
};
