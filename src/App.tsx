import React, { useState } from 'react';
import './App.scss';
import Button from '@mui/material/Button';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [selectButton, setSelectButton] = useState('');

  const handleClickAll = () => {
    getAll()
      .then((good: Good[]) => {
        if (selectButton !== 'five') {
          setSelectButton('five');

          return setGoods(good);
        }

        setSelectButton('');

        return setGoods([]);
      });
  };

  const handleClick5First = () => {
    get5First()
      .then((good: Good[]) => {
        if (selectButton !== 'five') {
          setSelectButton('five');

          return setGoods(good);
        }

        setSelectButton('');

        return setGoods([]);
      });
  };

  const handleClickRedGoods = () => {
    getRedGoods()
      .then(good => {
        if (selectButton !== 'red') {
          setSelectButton('red');

          return setGoods(good);
        }

        setSelectButton('');

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
