import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList/GoodsList';

const App: React.FC = () => {
  const [goodsList, setGoodsList] = useState<Good[]>([]);

  const [isErrorOccurred, setIsErrorOccured] = useState(false);

  const handleShowAllButtonClick = () => {
    try {
      getAll().then(goods => {
        setGoodsList(goods);
        setIsErrorOccured(false);
      });
    } catch (error) {
      setIsErrorOccured(true);
    }
  };

  const handleShowFiveFirstButtonClick = async () => {
    try {
      const goods = await get5First();

      setGoodsList(goods);
      setIsErrorOccured(false);
    } catch (error) {
      setIsErrorOccured(true);
    }
  };

  const handleShowRedGoodsButtonClick = async () => {
    try {
      const goods = await getRedGoods();

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
        onClick={handleShowAllButtonClick}
      >
        Show all goods
      </button>

      <button
        type="button"
        onClick={handleShowFiveFirstButtonClick}
      >
        Show 5 first goods
      </button>

      <button
        type="button"
        onClick={handleShowRedGoodsButtonClick}
      >
        Show red goods
      </button>
      {
        goodsList.length > 0
        && <GoodsList listOfGoods={goodsList} />
      }
      {
        isErrorOccurred
        && <p>Loading was not finished successfully</p>
      }
    </>
  );
};

export default App;
