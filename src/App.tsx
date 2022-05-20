import React, { useState } from 'react';
import './App.scss';

import { GoodsList } from './components/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  const showGoods = (requirement: () => Promise<Good[]>) => {
    requirement()
      .then(goods => setVisibleGoods(goods));
  };

  return (
    <div className="app">
      <div className="buttons">
        <button
          className="buttons__button"
          type="button"
          onClick={() => showGoods(getAll)}
        >
          Load all goods
        </button>

        <button
          className="buttons__button"
          type="button"
          onClick={() => showGoods(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          className="buttons__button"
          type="button"
          onClick={() => showGoods(getRedGoods)}
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
