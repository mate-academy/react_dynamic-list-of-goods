import React, { useState, useEffect } from 'react';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './Components/GoodsList/GoodsList';

const App = () => {
  const handleGoods = async(func) => {
    const arr = await func();

    setGoods(arr);
  };

  const [goods, setGoods] = useState([]);

  useEffect(() => {
    handleGoods(getAll);
  }, []);

  return (
    <>
      <div>
        <button
          type="button"
          onClick={() => handleGoods(getAll)}
        >
          all
        </button>
        <button
          type="button"
          onClick={() => handleGoods(getRedGoods)}
        >
          red
        </button>
        <button
          type="button"
          onClick={() => handleGoods(get5First)}
        >
          5
        </button>
      </div>
      <GoodsList goods={goods} />
    </>
  );
};

export default App;
