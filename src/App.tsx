import React, { useState } from 'react';
import './App.scss';
import { Button, Paper, Container } from '@mui/material';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5FirstGoods, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleOnClick = (processedGoods: Promise<Good[]>) => {
    processedGoods.then(setGoods);
  };

  return (
    <div className="App">
      <Paper sx={{
        width: '400px',
        margin: 'auto',
        textAlign: 'center',
        padding: '10px 20px',
      }}
      >
        <h1>Dynamic list of Goods</h1>
        <Container sx={{ width: 250 }}>
          <Button
            variant="contained"
            data-cy="all-button"
            onClick={() => handleOnClick(getAll())}
            sx={{ width: 200, marginBottom: 1 }}
          >
            Load all goods
          </Button>

          <Button
            variant="contained"
            data-cy="first-five-button"
            onClick={() => handleOnClick(get5FirstGoods())}
            sx={{ width: 200, marginBottom: 1 }}
          >
            Load 5 first goods
          </Button>

          <Button
            variant="contained"
            data-cy="red-button"
            onClick={() => handleOnClick(getRedGoods())}
            sx={{ width: 200, marginBottom: 1 }}
          >
            Load red goods
          </Button>
        </Container>

        <GoodsList goods={goods} />
      </Paper>
    </div>
  );
};
