import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

const App = () => {
  const [goods, setGoods] = useState([]);

  const fetchData = async(getData) => {
    const goodsFromServer = await getData();

    setGoods(goodsFromServer);
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        onClick={() => fetchData(getAll)}
      >
        Load all
      </button>
      <button
        type="button"
        onClick={() => fetchData(getRedGoods)}
      >
        Load red
      </button>
      <button
        type="button"
        onClick={() => fetchData(get5First)}
      >
        Load 5 first
      </button>

      <GoodsList goods={goods} />
    </>
  );
};

export default App;
