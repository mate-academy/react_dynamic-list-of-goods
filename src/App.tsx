import React, { useState } from 'react';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [activeBut, setActiveBut] = useState<string>('');

  const handleClick = async (func: () => Promise<Good[]>, name: string) => {
    const loadedGoods = await func();

    setGoods(loadedGoods);
    setActiveBut(name);
  };

  return (
    <div className="section content has-text-centered is-size-6">
      <div className="block">
        <h1 className="title is-2">Dynamic list of Goods</h1>
      </div>

      <div className="block">
        <button
          className={
            activeBut === 'all'
              ? 'button is-primary mr-2 mb-2'
              : 'button is-primary mr-2 mb-2 is-outlined'
          }
          type="button"
          onClick={() => handleClick(getAll, 'all')}
        >
          Load All goods
        </button>

        <button
          className={
            activeBut === 'five'
              ? 'button is-primary mr-2 mb-2'
              : 'button is-primary mr-2 mb-2 is-outlined'
          }
          type="button"
          onClick={() => handleClick(get5First, 'five')}
        >
          Load 5 first goods
        </button>

        <button
          className={
            activeBut === 'red'
              ? 'button is-primary'
              : 'button is-primary is-outlined'
          }
          type="button"
          onClick={() => handleClick(getRedGoods, 'red')}
        >
          Load red goods
        </button>
      </div>

      <div className="block">
        {goods.length > 0
          ? <GoodsList goods={goods} />
          : <p>No goods were loaded</p>}
      </div>
    </div>
  );
};

export default App;
