import React, { useState } from 'react';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodList } from './Components/GoodList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const asyncGetAll = async () => {
    return setGoods(await (getAll()));
  };

  const asyncGet5First = async () => {
    return setGoods(await (get5First()));
  };

  const asyncGetRedGoods = async () => {
    return setGoods(await (getRedGoods()));
  };

  return (
    <div className="wrapper">
      <div className="allButtons">
        <button
          className="button"
          type="button"
          onClick={() => asyncGetAll()}
        >
          Load All goods
        </button>

        <button
          className="button"
          type="button"
          onClick={() => asyncGet5First()}
        >
          Load 5 first goods
        </button>

        <button
          className="button"
          type="button"
          onClick={() => asyncGetRedGoods()}
        >
          Load red goods
        </button>
      </div>

      <GoodList goods={goods} />
    </div>
  );
};

export default App;
