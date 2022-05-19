import React, { useState } from 'react';
import './App.scss';
import { getAll, get5First, getRed } from './api/goods';
import GoodsList from './GoodsList/GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const takeAllGoods = async () => {
    const allGoodsFromServer = await getAll();

    setGoods(allGoodsFromServer);
  };

  const take5FirstGoods = async () => {
    const fiveFirstGoodsFromServer = await get5First();

    setGoods(fiveFirstGoodsFromServer);
  };

  const takeRedGoods = async () => {
    const redGoodsFromServer = await getRed();

    setGoods(redGoodsFromServer);
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
          onClick={takeAllGoods}
        >
          Show all
        </button>

        <button
          type="button"
          className="App__button"
          onClick={take5FirstGoods}
        >
          Show 5 first
        </button>

        <button
          type="button"
          className="App__button"
          onClick={takeRedGoods}
        >
          Show only red
        </button>
      </div>

      {goods.length > 0 && <GoodsList goods={goods} />}
    </div>
  );
};

export default App;
