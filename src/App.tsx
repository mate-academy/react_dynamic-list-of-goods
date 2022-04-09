import React, { useState } from 'react';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoogsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const fetchAllGoods = async () => {
    setGoods(await getAll());
  };

  const fetchFirstFive = async () => {
    setGoods(await get5First());
  };

  const fetchRedGoods = async () => {
    setGoods(await getRedGoods());
  };

  return (
    <>
      <h1 className="title">
        Dynamic list of Goods
      </h1>

      <div className="Button">
        <button
          type="button"
          className="Button__all"
          onClick={fetchAllGoods}
        >
          Load All goods
        </button>

        <button
          type="button"
          className="Button__five"
          onClick={fetchFirstFive}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          className="Button__red"
          onClick={fetchRedGoods}
        >
          Load Red goods
        </button>
      </div>

      <GoodsList
        goods={goods}
      />
    </>
  );
};

export default App;
