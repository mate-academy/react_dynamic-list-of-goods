import React, { useState } from 'react';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodList } from './Components/GoodList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  return (
    <div className="wrapper">
      <div className="allButtons">
        <button
          className="button"
          type="button"
          onClick={async () => {
            setGoods(await (getAll()));
          }}
        >
          Load All goods
        </button>

        <button
          className="button"
          type="button"
          onClick={async () => {
            setGoods(await (get5First()));
          }}
        >
          Load 5 first goods
        </button>

        <button
          className="button"
          type="button"
          onClick={async () => {
            setGoods(await (getRedGoods()));
          }}
        >
          Load red goods
        </button>
      </div>

      <GoodList goods={goods} />
    </div>
  );
};

export default App;
