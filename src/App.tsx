import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

let emptyArr: Good[];

export const App: React.FC = () => {
  const [finalGoods, setfinalGoods] = useState(emptyArr);

  const handler = (goods: Good[]) => {
    setfinalGoods(goods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => getAll().then(handler)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => get5First().then(handler)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => getRedGoods().then(handler)}
      >
        Load red goods
      </button>

      {finalGoods && <GoodsList goods={finalGoods} />}
    </div>
  );
};
