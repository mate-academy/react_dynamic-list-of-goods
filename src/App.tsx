import React, { useState } from 'react';
import './App.scss';
import Button from '@mui/material/Button';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [selectedButton, setSelectedButton] = useState('');

  const handleClickAll = () => {
    getAll()
      .then((loadedGoods: Good[]) => {
        if (selectedButton !== 'all') {
          setSelectedButton('all');

          return setGoods(loadedGoods);
        }

        setSelectedButton('');

        return setGoods([]);
      });
  };

  const handleClick5First = () => {
    get5First()
      .then((loadedGoods: Good[]) => {
        if (selectedButton !== 'five') {
          setSelectedButton('five');

          return setGoods(loadedGoods);
        }

        setSelectedButton('');

        return setGoods([]);
      });
  };

  const handleClickRedGoods = () => {
    getRedGoods()
      .then(loadedGoods => {
        if (selectedButton !== 'red') {
          setSelectedButton('red');

          return setGoods(loadedGoods);
        }

        setSelectedButton('');

        return setGoods([]);
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <Button
        variant="outlined"
        type="button"
        data-cy="all-button"
        onClick={handleClickAll}
      >
        Load all goods
      </Button>

      <Button
        type="button"
        data-cy="first-five-button"
        variant="outlined"
        onClick={handleClick5First}
      >
        Load 5 first goods
      </Button>

      <Button
        variant="outlined"
        type="button"
        data-cy="red-button"
        onClick={handleClickRedGoods}
      >
        Load red goods
      </Button>

      <GoodsList goods={goods} />
    </div>
  );
};
