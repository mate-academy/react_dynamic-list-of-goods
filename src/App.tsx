import React, { useState } from 'react';
import './App.scss';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleAllGoods = () => {
    getAll()
      .then(allGoods => {
        setGoods(allGoods);
      })
      .catch(error => {
        return new Error(error);
      });
  };

  const handleFirstFiveGoods = () => {
    get5First()
      .then(fiveGoods => {
        setGoods(fiveGoods);
      })
      .catch(error => {
        return new Error(error);
      });
  };

  const handleRedGoods = () => {
    getRedGoods()
      .then(redGoods => {
        setGoods(redGoods);
      })
      .catch(error => {
        return new Error(error);
      });
  };

  return (
    <div className="App">
      <h1 className="title">Dynamic list of Goods</h1>

      <div className="buttons-wrap">
        <Button
          type="button"
          className="button"
          variant="outlined"
          data-cy="all-button"
          onClick={handleAllGoods}
        >
          Load all goods
        </Button>

        <Button
          type="button"
          className="button"
          variant="outlined"
          data-cy="first-five-button"
          onClick={handleFirstFiveGoods}
        >
          Load 5 first goods
        </Button>

        <Button
          type="button"
          className="button"
          variant="outlined"
          data-cy="red-button"
          onClick={handleRedGoods}
        >
          Load red goods
        </Button>
      </div>

      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        <GoodsList goods={goods} />
      </Typography>

    </div>
  );
};
