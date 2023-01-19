import React, { useState } from 'react';
import './App.scss';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleClick = (preparedGoods: Promise<Good[]>) => (
    preparedGoods
      .then(setGoods)
  );

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <Button
        variant="contained"
        color="success"
        type="button"
        data-cy="all-button"
        onClick={() => handleClick(getAll())}
      >
        Load all goods
      </Button>

      <Button
        variant="contained"
        color="info"
        type="button"
        data-cy="first-five-button"
        onClick={() => handleClick(get5First())}
      >
        Load 5 first goods
      </Button>

      <Button
        variant="contained"
        color="error"
        type="button"
        data-cy="red-button"
        onClick={() => handleClick(getRed())}
      >
        Load red goods
      </Button>

      {goods.length !== 0 && <GoodsList goods={goods} />}
    </div>
  );
};
