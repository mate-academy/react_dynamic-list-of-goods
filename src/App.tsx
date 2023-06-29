import React, { useState } from 'react';
import './App.scss';
import { Button, ButtonGroup } from '@mui/material';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goodsList, setGoodsList] = useState<Good[]>([]);

  const handleClickAllGoods = async () => {
    try {
      const goods = await getAll();

      setGoodsList(goods);
    } catch (error) {
      throw new Error('No data was found!');
    }
  };

  const handleClickFirstFiveGoods = async () => {
    try {
      const goods = await get5First();

      setGoodsList(goods);
    } catch (error) {
      throw new Error('No data was found!');
    }
  };

  const handleClickRedGoods  = async () => {
    try {
      const goods = await getRedGoods();

      setGoodsList(goods);
    } catch (error) {
      throw new Error('No data was found!');
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button
          type="button"
          data-cy="all-button"
          onClick={handleClickAllGoods}
        >
          Load all goods
        </Button>

        <Button
          type="button"
          data-cy="first-five-button"
          onClick={handleClickFirstFiveGoods}
        >
          Load 5 first goods
        </Button>

        <Button
          type="button"
          data-cy="red-button"
          onClick={handleClickRedGoods}
        >
          Load red goods
        </Button>
      </ButtonGroup>

      <GoodsList goods={goodsList} />
    </div>
  );
};
