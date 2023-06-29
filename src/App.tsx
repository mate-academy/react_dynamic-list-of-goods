import React, { useState } from 'react';
import './App.scss';
import { Button } from '@mui/material';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good []>([]);

  const onClickAllGoods = async () => {
    const allGoods = await getAll();

    setGoods(allGoods);
  };

  const onClick5First = async () => {
    const first5Goods = await get5First();

    setGoods(first5Goods);
  };

  const onClickRedGoods = async () => {
    const redGoods = await getRedGoods();

    setGoods(redGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <Button
        type="button"
        color="success"
        data-cy="all-button"
        onClick={onClickAllGoods}
      >
        Load all goods
      </Button>

      <Button
        type="button"
        data-cy="first-five-button"
        onClick={onClick5First}
      >
        Load 5 first goods
      </Button>

      <Button
        type="button"
        color="warning"
        data-cy="red-button"
        onClick={onClickRedGoods}
      >
        Load red goods
      </Button>

      <GoodsList goods={goods} />
    </div>
  );
};
