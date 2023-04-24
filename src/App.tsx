import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { Good } from './types/Good';
import { DisableButton } from './enums/DisableButton';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | null>(null);
  const [disabled, setDisabled] = useState(DisableButton.None);

  const loadAllGoods = async () => {
    const items = await getAll();

    setDisabled(DisableButton.All);
    setGoods(items);
  };

  const load5FirstGoods = async () => {
    const items = await get5First();

    setDisabled(DisableButton.FiveFirst);
    setGoods(items);
  };

  const loadRedGoods = async () => {
    const items = await getRedGoods();

    setDisabled(DisableButton.Red);
    setGoods(items);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={loadAllGoods}
        disabled={disabled === 'all'}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={load5FirstGoods}
        disabled={disabled === '5First'}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={loadRedGoods}
        disabled={disabled === 'red'}
      >
        Load red goods
      </button>

      {goods && <GoodsList goods={goods} />}
    </div>
  );
};
