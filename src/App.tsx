import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

enum BtnType {
  Nothing = '',
  All = 'All',
  Five = 'Five',
  Red = 'Red',
}

export const App: React.FC = () => {
  const [changeListOfGoods, setChangeListOfGoods] = useState<BtnType>();
  const [listGoods, setListGoods] = useState<Good[]>([]);

  useEffect(() => {
    let items: Promise<Good[]> | undefined;

    switch (changeListOfGoods) {
      case BtnType.All:
        items = getAll();
        break;

      case BtnType.Five:
        items = get5First();
        break;

      case BtnType.Red:
        items = getRedGoods();
        break;

      default:
        items = undefined;
        break;
    }

    // eslint-disable-next-line no-console
    items?.then(item => setListGoods(item)).catch(console.error);
  }, [changeListOfGoods]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setChangeListOfGoods(BtnType.All)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setChangeListOfGoods(BtnType.Five)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setChangeListOfGoods(BtnType.Red)}
      >
        Load red goods
      </button>

      <GoodsList goods={listGoods} />
    </div>
  );
};
