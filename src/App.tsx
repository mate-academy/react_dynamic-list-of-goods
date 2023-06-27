import React, { useState } from 'react';
import './App.scss';
import { Button } from '@mui/material';
import { GoodsList } from './GoodsList';

import {
  getAll,
  get5First,
  getRedGoods,
  sortByName,
  getRedColor,
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
    const sortedData = sortByName(data);

    setGoods(sortedData.slice(0, 5));
  };

  const onAddRed = async () => {
    const data = await getRedGoods();
    const redGoods = getRedColor(data);

    setGoods(redGoods);
  };

  const onReset = () => {
    setGoods([]);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <Button
        variant="contained"
        data-cy="all-button"
        onClick={onAddAll}
      >
        Load all goods
      </Button>

      <Button
        variant="contained"
        data-cy="first-five-button"
        onClick={onAddFive}
      >
        Load 5 first goods
      </Button>

      <Button
        variant="contained"
        data-cy="all-button"
        onClick={onAddRed}
      >
        Load red goods
      </Button>

      <Button
        variant="contained"
        onClick={onReset}
      >
        Reset goods
      </Button>

      <GoodsList goods={goods} />
    </div>
  );
};
