import React, { useCallback, useState } from 'react';
import 'bulma/css/bulma.min.css';
import './App.scss';

import { get5First, getAll, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

const App: React.FC = () => {
  const [goodsList, setGoodsList] = useState<Good[]>([]);

  const getAllGoods = useCallback(
    async () => {
      setGoodsList(await getAll());
    }, [],
  );

  const getFirst5Goods = useCallback(
    async () => {
      setGoodsList(await get5First());
    }, [],
  );

  const getAllRedGoods = useCallback(
    async () => {
      setGoodsList(await getRedGoods());
    }, [],
  );

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      <div className="Buttons">
        <button
          className="Button is-link"
          type="button"
          onClick={getAllGoods}
        >
          Get All
        </button>

        <button
          className="Button is-link"
          type="button"
          onClick={getFirst5Goods}
        >
          Get first 5 goods
        </button>

        <button
          className="Button is-link"
          type="button"
          onClick={getAllRedGoods}
        >
          Get Red goods
        </button>
      </div>

      <div>
        <GoodsList goodsList={goodsList} />
      </div>
    </div>
  );
};

export default App;
