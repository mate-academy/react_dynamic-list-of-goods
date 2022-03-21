import React, { useState } from 'react';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList/GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleButton = async (getGoods: ()=>Promise<Good[]>) => {
    setGoods(await getGoods());
  };

  return (
    <div className="App container has-text-centered">
      <h1 className="title">Dynamic list of goods</h1>
      <button
        type="button"
        className="button is-normal mr-4"
        onClick={() => handleButton(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        className="button is-normal mr-4"
        onClick={() => handleButton(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        className="button is-normal mr-4"
        onClick={() => handleButton(getRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

export default App;
