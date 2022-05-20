import React, { useState } from 'react';
import { getAll, get5First, getRed } from './api/goods';
import GoodsList from './GoodsList/GoodsList';
import './App.scss';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAllGoods = async () => {
    const allGoodsFromServer = await getAll();

    setGoods(allGoodsFromServer);
  };

  const get5FirstGoods = async () => {
    const fiveFirstGoodsFromServer = await get5First();

    setGoods(fiveFirstGoodsFromServer);
  };

  const getRedGoods = async () => {
    const redGoodsFromServer = await getRed();

    setGoods(redGoodsFromServer);
  };

  const hideGoodsList = () => {
    setGoods([]);
  };

  return (
    <div className="App">
      <h1 className="App__title">
        Dynamic list of Goods
      </h1>

      <div className="App__buttons">
        <button
          type="button"
          className="App__button"
          onClick={getAllGoods}
        >
          Show all
        </button>

        <button
          type="button"
          className="App__button"
          onClick={get5FirstGoods}
        >
          Show 5 first
        </button>

        <button
          type="button"
          className="App__button"
          onClick={getRedGoods}
        >
          Show only red
        </button>
      </div>

      {goods.length > 0 && (
        <GoodsList goods={goods} />
      )}

      {goods.length > 0 && (
        <button
          type="button"
          className="App__button"
          onClick={hideGoodsList}
        >
          Hide
        </button>
      )}
    </div>
  );
};

export default App;
