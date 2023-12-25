import React, { useState } from 'react';
import './App.scss';
import { Container, Paper, Button } from '@mui/material';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [availableGoods, setAvailableGoods] = useState<Good[]>([]);

  const showAllClick = async () => {
    const allGoods = await getAll();

    setAvailableGoods(allGoods);
  };

  const showFirstFiveSortedGoods = async () => {
    const firstFive = await get5First();

    setAvailableGoods(firstFive);
  };

  const showRedGoods = async () => {
    const allRed = await getRedGoods();

    setAvailableGoods(allRed);
  };

  return (
    <Container
      maxWidth="md"
      className="container"
    >
      <Paper
        elevation={20}
        className="paper"
      >
        <div className="App">
          <h1>Dynamic list of Goods</h1>
          <Container maxWidth="sm">
            <Button
              variant="outlined"
              type="button"
              data-cy="all-button"
              onClick={showAllClick}
            >
              Load all goods
            </Button>
            <Button
              variant="outlined"
              type="button"
              data-cy="first-five-button"
              onClick={showFirstFiveSortedGoods}
            >
              Load 5 first goods
            </Button>
            <Button
              variant="outlined"
              type="button"
              data-cy="red-button"
              onClick={showRedGoods}
            >
              Load red goods
            </Button>
            <GoodsList goods={availableGoods} />
          </Container>
        </div>
      </Paper>
    </Container>
  );
};
