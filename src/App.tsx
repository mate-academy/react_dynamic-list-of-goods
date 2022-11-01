import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import './App.scss';
import { GoodsList } from './Component/GoodsList/GoodsList';
import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';
import { Button } from './Component/Button';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAllGoods = async () => {
    const currentGoods = await getAll();

    setGoods(currentGoods);
  };

  const getFirstFive = async () => {
    const currentGoods = await get5First();

    setGoods(currentGoods);
  };

  const getRedGoods = async () => {
    const currentGoods = await getRed();

    setGoods(currentGoods);
  };

  return (
    <div className="App">
      <h1 className="title is-1">Dynamic list of Goods</h1>

      <div className="App__buttons">
        <Button
          className="button is-primary"
          data-cy="all-button"
          onClick={getAllGoods}
        >
          Load all goods
        </Button>

        <Button
          className="button is-primary"
          data-cy="first-five-button"
          onClick={getFirstFive}
        >
          Load 5 first goods
        </Button>

        <Button
          className="button is-primary"
          data-cy="red-button"
          onClick={getRedGoods}
        >
          Load red goods
        </Button>
      </div>

      <GoodsList goods={goods} />
    </div>
  );
};
