import React, { useState } from 'react';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';

import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  const loadAllGoods = async () => {
    const response = await getAll();

    setVisibleGoods(response);
  };

  const loadFirst5SortedGoods = async () => {
    const response = await get5First();

    setVisibleGoods(response);
  };

  const LoadRedColoredGoods = async () => {
    const response = await getRedGoods();

    setVisibleGoods(response);
  };

  return (
    <div className="App">
      <h1 className="App__title">Dynamic list of Goods</h1>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          type="button"
          variant="outlined"
          data-cy="all-button"
          onClick={loadAllGoods}
          sx={{ margin: '10px' }}
          color="secondary"
        >
          Load all goods
        </Button>

        <Button
          type="button"
          variant="outlined"
          data-cy="first-five-button"
          onClick={loadFirst5SortedGoods}
          sx={{ margin: '10px' }}
          color="secondary"

        >
          Load 5 first goods
        </Button>

        <Button
          type="button"
          variant="outlined"
          data-cy="red-button"
          onClick={LoadRedColoredGoods}
          sx={{ margin: '10px' }}
          color="secondary"
        >
          Load red goods
        </Button>
      </Box>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
