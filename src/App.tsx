import React, { useState } from 'react';
import './App.scss';
import Button from '@mui/material/Button';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadGoods = async (loadedGoods: Promise<Good[]>) => {
    setGoods(await loadedGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <Button
        variant="contained"
        color="secondary"
        className="button"
        type="button"
        data-cy="all-button"
        onClick={() => loadGoods(getAll())}
      >
        Load all goods
      </Button>

      <Button
        variant="contained"
        color="secondary"
        className="button"
        type="button"
        data-cy="first-five-button"
        onClick={() => loadGoods(get5First())}
      >
        Load 5 first goods
      </Button>

      <Button
        variant="contained"
        color="secondary"
        className="button"
        type="button"
        data-cy="red-button"
        onClick={() => loadGoods(getRedGoods())}
      >
        Load red goods
      </Button>

      <GoodsList goods={goods} />
    </div>
  );
};
