import React, { useState } from 'react';
import './App.scss';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Loader } from './Components/Loader';

export const App: React.FC = () => {
  const [goodsList, setGoodsList] = useState<Good[]>([]);
  const [waiter, setWaiter] = useState(false);

  const handleGetAll = () => {
    setWaiter(true);

    setTimeout(async () => {
      setWaiter(false);

      return setGoodsList(await getAll());
    }, 500);
  };

  const handleGet5Firs = () => {
    setWaiter(true);

    setTimeout(async () => {
      setWaiter(false);

      return setGoodsList(await get5First());
    }, 500);
  };

  const handleGetRedGoods = () => {
    setWaiter(true);

    setTimeout(async () => {
      setWaiter(false);

      return setGoodsList(await getRedGoods());
    }, 500);
  };

  return (
    <div className="App">
      <h1 className="App__title">Dynamic list of Goods</h1>

      <ButtonGroup>
        <Button
          variant="secondary"
          onClick={handleGetAll}
          type="button"
          data-cy="all-button"
        >
          Load all goods
        </Button>

        <Button
          variant="warning"
          onClick={handleGet5Firs}
          type="button"
          data-cy="first-five-button"
        >
          Load 5 first goods
        </Button>

        <Button
          variant="danger"
          onClick={handleGetRedGoods}
          type="button"
          data-cy="red-button"
        >
          Load red goods
        </Button>
      </ButtonGroup>

      {!waiter
        ? <GoodsList goods={goodsList} />
        : <Loader />}
    </div>
  );
};
