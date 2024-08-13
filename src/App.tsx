import { FC, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  function handleCLick(e: React.MouseEvent<HTMLButtonElement>) {
    let getGoods;

    switch (e.currentTarget.id) {
      case 'all': {
        getGoods = goodsAPI.getAll();
        break;
      }

      case 'five': {
        getGoods = goodsAPI.get5First();
        break;
      }

      case 'red': {
        getGoods = goodsAPI.getRedGoods();
        break;
      }
    }

    getGoods?.then(data => setVisibleGoods([...data]));
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" id="all" onClick={handleCLick}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        id="five"
        onClick={handleCLick}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" id="red" onClick={handleCLick}>
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
