import { useEffect, useState } from 'react';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

import './App.scss';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [option, setOption] = useState<string>('');

  const choseOption = (opt: string) => {
    setOption(opt);
  };

  useEffect(() => {
    switch (option) {
      case 'all':
        getAll().then(setGoods);
        break;

      case 'five':
        get5First().then(setGoods);
        break;

      case 'red':
        getRedGoods().then(setGoods);
    }
  }, [option]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => choseOption('all')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => choseOption('five')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => choseOption('red')}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
