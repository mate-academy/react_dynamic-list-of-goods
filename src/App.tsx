import { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleAllGoods = () => {
    getAll().then(data => setGoods(data));
  };

  const handle5FirstGoods = () => {
    get5First().then(data =>
      setGoods(data.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5)),
    );
  };

  const handleRedGoods = () => {
    getRedGoods().then(data =>
      setGoods(data.filter(good => good.color === 'red')),
    );
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handle5FirstGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
