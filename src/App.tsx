import React, { useCallback, useState } from 'react';
import './reset.scss';
import './App.scss';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleClickGetAllGoods = useCallback(async () => {
    setGoods(await getAll());
  }, []);

  const handleClickGetFirstFiveGoods = useCallback(async () => {
    setGoods(await get5First());
  }, []);

  const handleClickGetRedGoods = useCallback(async () => {
    setGoods(await getRed());
  }, []);

  return (
    <div className="App">
      <div className="App__container">
        <h1 className="App__title">
          Dynamic list of Goods
        </h1>

        <ButtonGroup
          className="App__button-group"
          variant="text"
          size="large"
        >
          <Button
            type="button"
            data-cy="all-button"
            onClick={handleClickGetAllGoods}
          >
            Load all goods
          </Button>

          <Button
            type="button"
            data-cy="first-five-button"
            onClick={handleClickGetFirstFiveGoods}
          >
            Load 5 first goods
          </Button>

          <Button
            type="button"
            data-cy="red-button"
            onClick={handleClickGetRedGoods}
          >
            Load red goods
          </Button>
        </ButtonGroup>

        {Boolean(goods.length) && <GoodsList goods={goods} />}
      </div>
    </div>
  );
};
