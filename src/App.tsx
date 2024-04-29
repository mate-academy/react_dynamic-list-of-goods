import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [list, setList] = useState<Good[]>([]);

  const handlerLoadAll = () => {
    getAll().then((data: Good[]) => {
      setList(data);
    });
  };

  const handlerFirstGoods = () => {
    get5First().then((data: Good[]) => {
      setList(
        data
          .sort((a, b) => {
            return a.name.localeCompare(b.name);
          })
          .slice(0, 5),
      );
    });
  };

  const handlerLoadRedGoods = () => {
    getRedGoods().then((data: Good[]) => {
      setList(data.filter(item => item.color === 'red'));
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button onClick={handlerLoadAll} type="button" data-cy="all-button">
        Load all goods
      </button>

      <button
        onClick={handlerFirstGoods}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button onClick={handlerLoadRedGoods} type="button" data-cy="red-button">
        Load red goods
      </button>

      <GoodsList goods={list} />
    </div>
  );
};
