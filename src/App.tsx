import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRed } from './api/goods';
import { GoodsList } from './components/GoodsList';

type DataToLoad = 'all' | 'five' | 'red';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadData = (dataToLoad: DataToLoad) => {
    switch (dataToLoad) {
      case 'five':
        get5First().then(loadedGoods => setGoods(loadedGoods));
        break;
      case 'red':
        getRed().then(loadedGoods => setGoods(loadedGoods));
        break;
      case 'all':
        getAll().then(loadedGoods => setGoods(loadedGoods));
        break;
      default:
        break;
    }
  };

  return (
    <>
      <GoodsList goods={goods} />
      <button
        type="button"
        onClick={() => loadData('all')}
      >
        Load All goods
      </button>
      <button
        type="button"
        onClick={() => loadData('five')}
      >
        Load 5 first goods
      </button>
      <button
        type="button"
        onClick={() => loadData('red')}
      >
        Load red goods
      </button>
    </>

  );
};

export default App;
