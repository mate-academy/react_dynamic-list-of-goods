import React, { useState } from 'react';
import './App.scss';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isError, setError] = useState(false);

  const dataLoading = async (data: Promise<Good[]>) => {
    setError(false);
    try {
      const currentGoods = await data;

      setGoods(currentGoods);
    } catch (err) {
      setError(true);
    }
  };

  const handleGetAll = () => {
    dataLoading(getAll());
  };

  const handleGet5First = () => {
    dataLoading(get5First());
  };

  const handleGetRedGoods = () => {
    dataLoading(getRedGoods());
  };

  return (
    <div className="App">
      <h1 className="title">Dynamic list of Goods</h1>

      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button
          type="button"
          data-cy="all-button"
          onClick={handleGetAll}
          className="button2"
          variant="contained"
        >
          Load all goods
        </Button>

        <Button
          type="button"
          data-cy="first-five-button"
          onClick={handleGet5First}
          className="button2"
          variant="contained"
        >
          Load 5 first goods
        </Button>

        <Button
          type="button"
          data-cy="red-button"
          onClick={handleGetRedGoods}
          className="button2"
          variant="contained"
        >
          Load red goods
        </Button>
      </ButtonGroup>

      {isError
        && (
          <Alert severity="error">
            Error loading data. Please try again later.
          </Alert>
        )}
      <GoodsList goods={goods} />
    </div>
  );
};
