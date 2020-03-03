import React, { FC, useState } from 'react';
import './App.css';
import { GoodList } from './components/GoodList';
import { downloadData } from './utils';

const App: FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const allButtonHandler = () => {
    downloadData()
      .then(list => {
        setGoods(list);
      });
  };

  const fiveButtonHandler = () => {
    downloadData()
      .then(list => {
        const newList = list
          .sort((item1, item2) => item1.name.localeCompare(item2.name))
          .slice(0, 5);

        setGoods(newList);
      });
  };

  const redButtonHandler = () => {
    downloadData()
      .then(list => {
        setGoods(list.filter((item) => item.color === 'red'));
      });
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>

      <button type="button" onClick={allButtonHandler}>
        Download all
      </button>
      <button type="button" onClick={fiveButtonHandler}>
        Download 5 first
      </button>
      <button type="button" onClick={redButtonHandler}>
        Download red goods
      </button>

      {!goods.length
        ? <p>Data of goods is empty. Please load the data</p>
        : <GoodList goods={goods} />}
    </>
  );
};

export default App;
