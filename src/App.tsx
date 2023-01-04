import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [clickedButton, setClickedButton] = useState('');

  const loadAllGoods = async () => {
    try {
      const allGoods = await getAll();

      setGoods(allGoods);
    } catch (error) {
      setGoods([]);
    }
  };

  const loadFirstFiveGoods = async () => {
    try {
      const fiveFirstGoods = await get5First();

      setGoods(fiveFirstGoods);
    } catch (error) {
      setGoods([]);
    }
  };

  const loadRedGoods = async () => {
    try {
      const redGoods = await getRedGoods();

      setGoods(redGoods);
    } catch (error) {
      setGoods([]);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        id="all-button"
        onClick={(event) => {
          const { id } = event.currentTarget;

          if (clickedButton !== id) {
            setClickedButton(id);
            loadAllGoods();
          }
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        id="first-five-button"
        onClick={(event) => {
          const { id } = event.currentTarget;

          if (clickedButton !== id) {
            setClickedButton(id);
            loadFirstFiveGoods();
          }
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        id="red-button"
        onClick={(event) => {
          const { id } = event.currentTarget;

          if (clickedButton !== id) {
            setClickedButton(id);
            loadRedGoods();
          }
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
