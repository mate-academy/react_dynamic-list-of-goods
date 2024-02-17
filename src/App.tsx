import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

type Buttons = {
  id: number;
  data: string;
  title: string;
};

const buttons: Buttons[] = [
  { id: 1, data: 'all-button', title: 'Load all goods' },
  { id: 2, data: 'first-five-button', title: 'Load 5 first goods' },
  { id: 3, data: 'red-button', title: 'Load red goods' },
];

function getPreparedGoods(sortButton: number | null) {
  switch (sortButton) {
    case 2:
      return get5First();
    case 3:
      return getRedGoods();
    default:
      return getAll();
  }
}

export const App: React.FC = () => {
  const [sortedGoods, setSortedGoods] = useState<Good[]>([]);

  const handleClickButton = (id: number) => {
    getPreparedGoods(id).then((goods: Good[]) => {
      setSortedGoods(goods);
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      {buttons.map(button => {
        const { id, data, title } = button;

        return (
          <button
            type="button"
            data-cy={data}
            key={id}
            onClick={() => handleClickButton(id)}
          >
            {title}
          </button>
        );
      })}

      <GoodsList goods={sortedGoods} />
    </div>
  );
};
