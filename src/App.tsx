import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './Components/GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  return (
    <div className="App">
      <button
        type="button"
        className="btn"
        onClick={async () => {
          setGoods(await getAll());
        }}
      >
        Load All goods
      </button>

      <button
        type="button"
        className="btn"
        onClick={async () => {
          setGoods(await get5First());
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        className="btn"
        onClick={async () => {
          setGoods(await getRedGoods());
        }}
      >
        Load red goods
      </button>

      <GoodsList
        goods={goods}
      />
    </div>
  );
};

export default App;
