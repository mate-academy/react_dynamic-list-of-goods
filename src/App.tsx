import React, { useState } from 'react';
import './App.scss';
import { GoodListComponent } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleClick = (clickType: string) => {
    switch (clickType) {
      case 'all':
        return getAll()
          .then(data => {
            setGoods(data);
          })
          .catch(e => e);

      case 'five':
        return get5First()
          .then(data => {
            setGoods(data);
          })
          .catch(e => e);

      case 'red':
        return getRedGoods()
          .then(data => {
            setGoods(data);
          })
          .catch(e => e);
    }

    return;
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleClick('all')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleClick('five')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleClick('red')}
      >
        Load red goods
      </button>

      <GoodListComponent goods={goods} />
    </div>
  );
};
