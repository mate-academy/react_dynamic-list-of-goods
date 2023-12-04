import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';
import { Button } from './types/Button';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [typeButton, setTypeButton] = useState<Button | null>(null);

  useEffect(() => {
    if (typeButton !== null) {
      switch (typeButton) {
        case Button.All:
          getAll().then((goodsItem) => {
            setGoods(goodsItem);
          });
          break;
        case Button.Five:
          get5First().then((goodsItem) => {
            setGoods(goodsItem);
          });
          break;
        case Button.Red:
          getRedGoods().then((goodsItem) => {
            setGoods(goodsItem);
          });
          break;
        default:
          break;
      }
    }
  }, [typeButton]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setTypeButton(Button.All)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setTypeButton(Button.Five)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setTypeButton(Button.Red)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
