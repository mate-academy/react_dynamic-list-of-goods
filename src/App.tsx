import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [sortedGoods, setSortedGoods] = useState<Good[]>([]);

  const handleAllGoods = () => {
    getAll().then(goods => setSortedGoods(goods));
  };

  const handle5Goods = () => {
    get5First().then(goods => setSortedGoods(goods));
  };

  const handleRedGoods = () => {
    getRedGoods().then(goods => setSortedGoods(goods));
  };

  return (
    <div className="App">
      <Typography
        variant="h1"
        align="center"
        style={{ fontSize: '32px', marginBottom: '10px' }}
      >
        Dynamic list of Goods
      </Typography>
      <Button
        type="button"
        data-cy="all-button"
        variant="outlined"
        style={{ marginRight: '10px' }}
        onClick={() => handleAllGoods()}
      >
        Load all goods
      </Button>

      <Button
        type="button"
        data-cy="first-five-button"
        variant="outlined"
        style={{ marginRight: '10px' }}
        onClick={() => handle5Goods()}
      >
        Load 5 first goods
      </Button>

      <Button
        type="button"
        data-cy="red-button"
        variant="outlined"
        onClick={() => handleRedGoods()}
      >
        Load red goods
      </Button>

      <GoodsList goods={sortedGoods} />
    </div>
  );
};
