import React, { useState } from 'react';
import './App.scss';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  const loadGoods = async (callback: () => Promise<Good[]>) => {
    try {
      const goods = await callback();

      setVisibleGoods(goods);
    } catch (error) {
      throw new Error('No goods loaded');
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      <Stack direction="row" spacing={2}>
        <Button
          variant="outlined"
          type="button"
          data-cy="all-button"
          onClick={() => loadGoods(getAll)}
        >
          Load all goods
        </Button>

        <Button
          variant="outlined"
          type="button"
          data-cy="first-five-button"
          onClick={() => loadGoods(get5First)}
        >
          Load 5 first goods
        </Button>

        <Button
          variant="outlined"
          type="button"
          data-cy="red-button"
          onClick={() => loadGoods(getRedGoods)}
        >
          Load red goods
        </Button>
      </Stack>
      <GoodsList goods={visibleGoods} />
    </div>
  );
};
