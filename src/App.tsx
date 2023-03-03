import React, { useState } from 'react';
import './App.scss';
import { Button, ButtonGroup, Typography } from '@mui/material';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [currentRequest, setCurrentRequest] = useState<Good[]>([]);

  const handleClickForRequest = (request: Promise<Good[]>) => {
    request
      .then(goods => setCurrentRequest(goods));
  };

  return (
    <div className="App">

      <div className="App__container">

        <Typography
          className="App__title"
          variant="h2"
          gutterBottom
        >
          Dynamic list of Goods
        </Typography>

        <ButtonGroup
          className="App__buttonGroup"
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button
            variant="outlined"
            size="medium"
            type="button"
            data-cy="all-button"
            onClick={() => handleClickForRequest(getAll())}
          >
            Load all goods
          </Button>

          <Button
            variant="outlined"
            size="medium"
            type="button"
            data-cy="first-five-button"
            onClick={() => handleClickForRequest(get5First())}
          >
            Load 5 first goods
          </Button>

          <Button
            variant="outlined"
            size="medium"
            type="button"
            data-cy="red-button"
            onClick={() => handleClickForRequest(getRedGoods())}
          >
            Load red goods
          </Button>

        </ButtonGroup>
      </div>

      <GoodsList goods={currentRequest} />
    </div>
  );
};
