import React, {useState} from 'react';
import './App.scss';
import { GoodList } from "./components/GoodList";

import {getAll, get5First, getRedGoods} from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const loadGoods = async () => {
    const goodsFromServer = await getAll();
    setGoods(goodsFromServer);
  };

  const loadFive = async () => {
    const fiveGoodsFromServer = await get5First();
    setGoods(fiveGoodsFromServer);
  };

  const loadRedGoods = async () => {
    const redGoodsFromServer = await getRedGoods();
    setGoods(redGoodsFromServer);
  };

  return (
    <div className="list">
      <h2 className="list__title">Dynamic list of Goods</h2>

      <div className="list__btn-wrp">
        <button
          type="button"
          onClick={loadGoods}
          className="list__btn"
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={loadFive}
          className="list__btn"
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={loadRedGoods}
          className="list__btn"
        >
          Load red goods
        </button>
      </div>

      {goods.length > 0 && <GoodList goods={goods} />}
    </div>
  )
}

export default App;
