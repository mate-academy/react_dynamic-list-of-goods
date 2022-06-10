import React, { useState } from 'react';
import './App.scss';
import * as goodsAPI from './api/goods';
import { GoodsList } from './GoodsList/GoodsList';

const App: React.FC = () => {
  const [goodsFromServer, setGoodsFromServer] = useState<Good[]>([]);

  const getAllGoods = async () => {
    setGoodsFromServer(await goodsAPI.getAll());
  };

  const getAllRedGoods = async () => {
    setGoodsFromServer(await goodsAPI.getRedGoods());
  };

  const getFiveGoods = async () => {
    setGoodsFromServer(await goodsAPI.get5First());
  };

  return (
    <div>
      <h1>Dynamic list of Goods</h1>

      <GoodsList
        goods={goodsFromServer}
      />
      <div>
        <button
          type="button"
          onClick={() => getAllGoods()}
        >
          all
        </button>

        <button
          type="button"
          onClick={() => getFiveGoods()}
        >
          5
        </button>

        <button
          type="button"
          onClick={() => getAllRedGoods()}
        >
          red
        </button>
      </div>
    </div>
  );
};

export default App;
