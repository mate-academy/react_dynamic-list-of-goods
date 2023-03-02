import React, { useState } from 'react';

import './App.scss';
import { Button } from '@mui/material';

import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { get5First, getAll, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  const handleButtonSubmit = async (loadedGoods: Promise<Good[]>) => {
    setVisibleGoods(await loadedGoods);
  };

  return (
    <div className="App">
      <h1 className="App_title">Dynamic list of Goods</h1>

      <Button
        sx={{ m: 0.5 }}
        variant="contained"
        color="success"
        type="button"
        data-cy="all-button"
        onClick={() => handleButtonSubmit(getAll())}
      >
        Load all goods
      </Button>

      <Button
        sx={{ m: 0.5 }}
        variant="contained"
        type="button"
        data-cy="first-five-button"
        onClick={() => handleButtonSubmit(get5First())}
      >
        Load 5 first goods
      </Button>

      <Button
        sx={{ m: 0.5 }}
        variant="contained"
        color="error"
        type="button"
        data-cy="red-button"
        onClick={() => handleButtonSubmit(getRedGoods())}
      >
        Load red goods
      </Button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
