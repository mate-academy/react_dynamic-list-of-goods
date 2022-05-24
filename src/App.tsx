import React, { useState } from 'react';
import { GoodsList } from './components/GoodsList';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  const onGetAll = async () => {
    const data = await getAll();

    setVisibleGoods(data);
  };

  const onGet5First = async () => {
    const data = await get5First();

    setVisibleGoods(data);
  };

  const onGetRedGoods = async () => {
    const data = await getRedGoods();

    setVisibleGoods(data);
  };

  return (
    <div className="app">
      <div className="app__buttons">
        <button
          className="app__button"
          type="button"
          onClick={onGetAll}
        >
          Load all goods
        </button>

        <button
          className="app__button"
          type="button"
          onClick={onGet5First}
        >
          Load 5 first goods
        </button>

        <button
          className="app__button"
          type="button"
          onClick={onGetRedGoods}
        >
          Load red goods
        </button>
      </div>

      {visibleGoods.length > 0 && (
        <GoodsList goods={visibleGoods} />
      )}
    </div>
  );
};

export default App;
