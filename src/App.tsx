import React, { useState } from 'react';
import './App.scss';
import { Button } from '@mui/material';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good []>([]);

  const loadAllGoods = () => {
    getAll()
      .then(responce => setGoods(responce));
  };

  const load5First = () => {
    get5First()
      .then(responce => setGoods(responce));
  };

  const loadRedGoods = () => {
    getRedGoods()
      .then(responce => setGoods(responce));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <Button
        type="button"
        color="success"
        data-cy="all-button"
        onClick={loadAllGoods}
      >
        Load all goods
      </Button>

      <Button
        type="button"
        data-cy="first-five-button"
        onClick={load5First}
      >
        Load 5 first goods
      </Button>

      <Button
        type="button"
        color="warning"
        data-cy="red-button"
        onClick={loadRedGoods}
      >
        Load red goods
      </Button>

      <GoodsList goods={goods} />
    </div>
  );
};
