import React, { useState } from 'react';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';

const App = () => {
  const [goods, setGoods] = useState([]);

  const fetchGoods = async(filter) => {
    const currentList = await filter();

    setGoods(currentList);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      <button
        type="button"
        onClick={() => fetchGoods(getAll)}
      >
        Load All goods
      </button>
      <button
        type="button"
        onClick={() => fetchGoods(get5First)}
      >
        Load 5 first goods
      </button>
      <button
        type="button"
        onClick={() => fetchGoods(getRedGoods)}
      >
        Load red goods
      </button>
      <GoodsList goods={goods} />
    </div>
  );
};

export default App;
