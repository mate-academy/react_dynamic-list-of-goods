import React, { useState } from 'react';
import './App.scss';
import { Button } from '@mui/material';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleClickLoadGoods = (listOfGoods: Promise<Good[]>) => (
    listOfGoods
      .then(setGoods)
  );

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <div className="Buttons">
        <Button
          variant="contained"
          color="success"
          type="button"
          data-cy="all-button"
          onClick={() => handleClickLoadGoods(getAll())}
        >
          Load all goods
        </Button>

        <Button
          variant="contained"
          color="success"
          type="button"
          data-cy="first-five-button"
          onClick={() => handleClickLoadGoods(get5First())}
        >
          Load 5 first goods
        </Button>

        <Button
          variant="contained"
          color="success"
          type="button"
          data-cy="red-button"
          onClick={() => handleClickLoadGoods(getRed())}
        >
          Load red goods
        </Button>
      </div>

      <GoodsList goods={goods} />
    </div>
  );
};
