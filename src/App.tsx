import React, { useState } from 'react';
import './App.scss';
import GoodsList from './components/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  async function fetchGoods(fetchParam: () => Promise<Good[]>) {
    const result = await fetchParam();

    setGoods(result);
  }

  return (
    <div className="app">
      <h2>List of goods</h2>
      <button
        type="button"
        onClick={() => fetchGoods(getAll)}
      >
        Get all goods
      </button>
      <button
        type="button"
        onClick={() => fetchGoods(get5First)}
      >
        First 5 goods
      </button>
      <button
        type="button"
        onClick={() => fetchGoods(getRedGoods)}
      >
        Only red color goods
      </button>
      {goods.length > 0
        ? <GoodsList goodsList={goods} />
        : <p>Press any button to load the list.</p>}
    </div>
  );
};

export default App;
