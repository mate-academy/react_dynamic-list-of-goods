import React, { useState } from 'react';
import './App.scss';
import * as goodsAPI from './api/goods';
import { GoodsList } from './GoodsList/GoodsList';

const App: React.FC = () => {
  const [goodsFromServer, setGoodsFromServer] = useState<Good[]>([]);

  const getGoods = async (typeRequest:Promise<Good[]>) => {
    setGoodsFromServer(await typeRequest);
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
          onClick={() => getGoods(goodsAPI.getAll())}
        >
          all
        </button>

        <button
          type="button"
          onClick={() => getGoods(goodsAPI.get5First())}
        >
          5
        </button>

        <button
          type="button"
          onClick={() => getGoods(goodsAPI.getRedGoods())}
        >
          red
        </button>
      </div>
    </div>
  );
};

export default App;
