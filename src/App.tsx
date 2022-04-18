import React, { useState, useEffect } from 'react';
import { getAll } from './api/goods';
import { GoodsList } from './GoodsList';
import './App.scss';

const App: React.FC = () => {
  const [visualGoods, setVisualGoods] = useState<Good[]>([]);

  const getGoods = (type = 'all') => {
    getAll()
      .then(goods => setVisualGoods(() => {
        switch (type) {
          case 'all': {
            return goods;
          }

          case '5': {
            return goods.slice(0, 5)
              .sort((a, b) => a.name.localeCompare(b.name));
          }

          case 'red': {
            return goods.filter(good => good.color === 'red');
          }

          default: {
            return goods;
          }
        }
      }));
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
