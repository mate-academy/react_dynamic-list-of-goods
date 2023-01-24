import React, { useState } from 'react';
import './App.scss';
import {
  Box, Paper, ButtonGroup, Button, Typography,
} from '@mui/material';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleClick = async (loadedGoods: Promise<Good[]>) => (
    setGoods(await loadedGoods));

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Paper
        sx={{
          width: '400px',
          padding: '40px',
        }}
        elevation={4}
      >
        <div className="App">
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            display="flex"
            justifyContent="center"
          >
            Dynamic list of Goods
          </Typography>

          <ButtonGroup size="small" variant="text">
            <Button
              type="button"
              data-cy="all-button"
              onClick={() => handleClick(goodsAPI.getAll())}
            >
              Load all goods
            </Button>

            <Button
              type="button"
              data-cy="first-five-button"
              onClick={() => handleClick(goodsAPI.get5First())}
            >
              Load 5 first goods
            </Button>

            <Button
              type="button"
              data-cy="red-button"
              onClick={() => handleClick(goodsAPI.getRedGoods())}
            >
              Load red goods
            </Button>
          </ButtonGroup>

          <GoodsList goods={goods} />
        </div>
      </Paper>
    </Box>
  );
};
