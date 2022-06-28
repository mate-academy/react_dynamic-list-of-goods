import React, { useState } from 'react';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList/GoodsList';

const App: React.FC = () => {
  const [goodsList, setGoodsList] = useState<Good[]>([]);

  const [isErrorOccurred, setIsErrorOccured] = useState(false);

  const fetchGoods = async (getSomeGoods: () => Promise<Good[]>) => {
    try {
      const goods = await getSomeGoods();

      setGoodsList(goods);
      setIsErrorOccured(false);
    } catch (error) {
      setIsErrorOccured(true);
    }
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        onClick={() => fetchGoods(getAll)}
      >
        Show all goods
      </button>

      <button
        type="button"
        onClick={() => fetchGoods(get5First)}
      >
        Show 5 first goods
      </button>

      <button
        type="button"
        onClick={() => fetchGoods(getRedGoods)}
      >
        Show red goods
      </button>
      {goodsList.length > 0 && (
        <GoodsList listOfGoods={goodsList} />
      )}
      {isErrorOccurred && (
        <p>Loading was not finished successfully</p>
      )}
    </>
  );
};

export default App;
