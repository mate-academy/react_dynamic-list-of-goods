import React, { useState } from 'react';
import './App.scss';
import { Good } from './types/Good';
import { getGoods } from './getGoods';
import { GoodsList } from './GoodsList';

enum Load {
  all = 'all',
  firstFive = 'firstFive',
  red = 'red',
}

export const App: React.FC = () => {
  const [load, setLoad] = useState('');
  const [filteredAndSortedGoods, setFilteredAndSortedGoods] = useState<Good[]>(
    [],
  );

  React.useEffect(() => {
    switch (load) {
      case Load.all:
        getGoods().then((res) => setFilteredAndSortedGoods(res));
        break;
      case Load.firstFive:
        getGoods().then((goods) => {
          const sortedGoods = [...goods]
            .sort((a, b) => a.name.localeCompare(b.name));

          setFilteredAndSortedGoods(sortedGoods.slice(0, 5));
        });
        break;
      case Load.red:
        getGoods().then((goods) => {
          const redGoods = goods.filter((good) => good.color === 'red');

          setFilteredAndSortedGoods(redGoods);
        });
        break;
      default:
        setFilteredAndSortedGoods([]);
        break;
    }
  }, [load]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setLoad(Load.all)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setLoad(Load.firstFive)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setLoad(Load.red)}
      >
        Load red goods
      </button>

      <GoodsList goods={filteredAndSortedGoods} />
    </div>
  );
};
