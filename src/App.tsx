import { useEffect, useState } from 'react';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App = () => {
  const [allGoods, setAllGoods] = useState<Good[]>([]);
  const [filterType, setFilterType] = useState<'all' | 'five' | 'red'>('all');

  useEffect(() => {
    const fetchGoods = async () => {
      try {
        if (filterType === 'all') {
          const goodsList: Good[] = await getAll();

          setAllGoods(goodsList);
        } else if (filterType === 'five') {
          const goodsList: Good[] = await get5First();

          setAllGoods(goodsList);
        } else if (filterType === 'red') {
          const goodsList: Good[] = await getRedGoods();

          setAllGoods(goodsList);
        }
      } catch (error) {}
    };

    fetchGoods();
  }, [filterType]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setFilterType('all')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setFilterType('five')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setFilterType('red')}
      >
        Load red goods
      </button>

      <GoodsList goods={allGoods} />
    </div>
  );
};
