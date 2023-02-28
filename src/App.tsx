import React, { useState } from 'react';
import './App.scss';

import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleListOfGoods = () => {
    getAll()
      .then((good) => {
        setGoods(good);
      });
  };

  const handleSortById = () => {
    get5First()
      .then((goodName) => {
        setGoods(goodName);
      });
  };

  const handleSortColorRed = () => {
    getRedGoods().then((goodColor) => {
      setGoods(goodColor);
    });
  };

  return (
    <Paper
      sx={{
        display: 'block',
        margin: 'auto',
        width: 370,
        height: 430,
      }}
      elevation={5}
      className="App"
    >
      <div style={{ textAlign: 'center' }}>
        <h1 className="title">
          Dynamic list of Goods
        </h1>

        <Button
          variant="contained"
          size="medium"
          type="button"
          data-cy="all-button"
          onClick={handleListOfGoods}
          className="button"
        >
          Load all
        </Button>

        <Button
          variant="contained"
          size="medium"
          type="button"
          color="success"
          data-cy="first-five-button"
          className="button"
          onClick={handleSortById}
        >
          Load 5 first
        </Button>

        <Button
          variant="contained"
          size="medium"
          color="error"
          type="button"
          data-cy="red-button"
          className="button"
          onClick={handleSortColorRed}
        >
          Load red
        </Button>

        <GoodsList
          goods={goods}
        />
      </div>

    </Paper>
  );
};
