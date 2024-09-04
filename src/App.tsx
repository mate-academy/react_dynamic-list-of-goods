import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { useEffect, useState } from 'react';
import { get5First } from './goods';
import { getAll } from './goods';
import { getRedGoods } from './goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [sortField, setSortField] = useState('');

  const handleClick = (type: 'all' | 'first5' | 'red') => {
    setSortField(type);
  };

  useEffect(() => {
    if (sortField === 'all') {
      getAll().then(setGoods);
    }

    if (sortField === 'first5') {
      get5First().then(setGoods);
    }

    if (sortField === 'red') {
      getRedGoods().then(setGoods);
    } else {
      return;
    }
  }, [sortField]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        onClick={() => handleClick('all')}
        type="button"
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        onClick={() => handleClick('first5')}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        onClick={() => handleClick('red')}
        type="button"
        data-cy="red-button"
      >
        Load red goods
      </button>
      <GoodsList goods={goods} />
    </div>
  );
};
