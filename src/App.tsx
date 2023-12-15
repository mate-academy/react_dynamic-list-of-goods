import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll } from './api/goods';

// import * as goodsAPI from './api/goods';

type Type = 'all' | 'five' | 'red' | null;

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [type, setType] = useState<Type>(null);

  const handleStateType = (value: string) => {
    setType(value as Type);
  };

  useEffect(() => {
    if (type) {
      getAll().then(goodsFromServer => {
        setGoods(goodsFromServer);
      });
    }
  }, [type]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        value="all"
        onClick={(event) => handleStateType(event.currentTarget.value)}
        type="button"
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button">
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button">
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
