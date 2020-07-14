import React, { useState } from 'react';
import './App.css';
import { response } from './api/api';
import { Product } from './interface';
import { GoodList } from './GoodList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Product[]>([]);
  const [loaded, setLoaded] = useState(false);

  const goodsFromServer = async (): Promise<Product[]> => {
    setLoaded(true);
    const requests = await response();

    setLoaded(false);

    return requests;
  };

  const showAllGoods = () => {
    goodsFromServer().then(data => setGoods(data));
  };

  const showFiveSortedProducts = () => {
    goodsFromServer().then((data) => {
      const sorted = data.sort((a, b) => a.name.localeCompare(b.name))
        .slice(0, 5);

      setGoods(sorted);
    });
  };

  const showRedGoods = () => {
    goodsFromServer().then((data) => {
      const redGoods = data.filter(good => good.color === 'red');

      setGoods(redGoods);
    });
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        onClick={showAllGoods}
      >
        Load All goods
      </button>
      <button type="button" onClick={showFiveSortedProducts}>
        Sorted 5
      </button>
      <button type="button" onClick={showRedGoods}>
        Show only red products
      </button>

      {loaded
        ? (
          <p>Loading...</p>
        )
        : (
          <GoodList
            goods={goods}
          />
        )}
    </>
  );
};

export default App;
