import React, { useState, useEffect } from 'react';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';
import './App.scss';

const App: React.FC = () => {
  const [visualGoods, setVisualGoods] = useState<Good[]>([]);

  const getGoods = (type = 'all') => {
    switch (type) {
      case 'all': {
        getAll().then(res => setVisualGoods(res));
        break;
      }

      case '5': {
        get5First().then(res => setVisualGoods(res));
        break;
      }

      case 'red': {
        getRedGoods().then(res => setVisualGoods(res));
        break;
      }

      default: {
        getAll().then(res => setVisualGoods(res));
      }
    }
  };

  useEffect(() => {
    getGoods();

    return () => {};
  }, []);

  return (
    <>
      <button type="button" onClick={() => getGoods()}>All</button>
      <button type="button" onClick={() => getGoods('5')}>5 first</button>
      <button type="button" onClick={() => getGoods('red')}>Only red</button>
      <GoodsList goods={visualGoods} />
    </>
  );
};

export default App;
