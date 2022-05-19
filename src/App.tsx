import React, { useState } from 'react';
import './App.scss';
import { fetchGoods } from './api/goods';
import { GoodsList } from './components/GoodsList/GoodsList';

const App: React.FC = () => {
  const [goodsList, setGoodsList] = useState<Good[]>([]);

  const [isErrorOccurred, setIsErrorOccured] = useState(false);

  const getAllGoods = (goods: Good[]) => {
    setGoodsList(goods);
  };

  const getFiveFirstGoods = (goods: Good[]) => {
    const fiveFirstGoods = goods.sort((good1, good2) => good1.name
      .localeCompare(good2.name)).slice(0, 5);

    setGoodsList(fiveFirstGoods);
  };

  const getRedGoods = (goods: Good[]) => {
    const redGoods = goods.filter(good => good.color === 'red');

    setGoodsList(redGoods);
  };

  const handleShowAllButtonClick = () => {
    try {
      fetchGoods(getAllGoods);
      setIsErrorOccured(false);
    } catch (error) {
      setIsErrorOccured(true);
    }
  };

  const handleShowFiveFirstButtonClick = () => {
    try {
      fetchGoods(getFiveFirstGoods);
      setIsErrorOccured(false);
    } catch (error) {
      setIsErrorOccured(true);
    }
  };

  const handleShowRedGoodsButtonClick = () => {
    try {
      fetchGoods(getRedGoods);
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
