import React, { useState } from 'react';
import './App.scss';
import { Button } from '@mui/material';
import { GoodsList } from './GoodsList';

import {
  getAll,
  get5First,
  getRedGoods,
} from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const onAddAll = async () => {
    const data = await getAll();

    setGoods(data);
  };

  const onAddFive = async () => {
    const data = await get5First();

    setGoods(data);
  };

  const onAddRed = async () => {
    const data = await getRedGoods();

    setGoods(data);
  };

  const onReset = () => {
    setGoods([]);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <Button
        type="button"
        variant="contained"
        data-cy="all-button"
        onClick={onAddAll}
      >
        Load all goods
      </Button>

      <Button
        type="button"
        variant="contained"
        data-cy="first-five-button"
        onClick={onAddFive}
      >
        Load 5 first goods
      </Button>

      <Button
        type="button"
        variant="contained"
        data-cy="red-button"
        onClick={onAddRed}
      >
        Load red goods
      </Button>

      <Button
        type="button"
        variant="contained"
        onClick={onReset}
      >
        Reset goods
      </Button>

      <GoodsList goods={goods} />
    </div>
  );
};
