import React, { useState } from 'react';
import { getAll, getTheFirstFive, getReds } from './api/goods';
import { Good } from './react-app-env';
import { GoodsList } from './components/GoodsList';

const App: React.FC = () => {
  const [good, setGoods] = useState<Good[]>([]);

  const all = () => {
    getAll().then(every => setGoods(every));
  };

  const theFirstFive = () => {
    getTheFirstFive().then(ordinal => setGoods(ordinal));
  };

  const reds = () => {
    getReds().then(goodsColor => setGoods(goodsColor));
  };

  return (
    <div>
      <div>
        <button
          type="button"
          onClick={all}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={theFirstFive}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={reds}
        >
          Load red goods
        </button>
      </div>

      <GoodsList goods={good} />
    </div>
  );
};

export default App;
