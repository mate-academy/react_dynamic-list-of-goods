import './App.scss';

import React, { useEffect, useState } from 'react';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

enum ListType {
  Nothing = '',
  All = 'All',
  Five = 'Five',
  Red = 'Red',
}

export const App: React.FC = () => {
  const [changeList, setChangeList] = useState<ListType>(ListType.Nothing);
  const [goods, setGoods] = useState<Good[]>([]);

  useEffect(() => {
    if (changeList === ListType.Nothing) {
      return;
    }

    let items: Promise<Good[]> | undefined;

    if (changeList === ListType.All) {
      items = getAll();
    } else if (changeList === ListType.Five) {
      items = get5First();
    } else if (changeList === ListType.Red) {
      items = getRedGoods();
    }

    items
      ?.then((data: Good[]) => setGoods(data))
      .catch(error => {
        console.error('Error loading goods:', error);
      });
  }, [changeList]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setChangeList(ListType.All)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setChangeList(ListType.Five)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setChangeList(ListType.Red)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
