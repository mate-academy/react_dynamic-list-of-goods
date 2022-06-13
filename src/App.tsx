import React, { useEffect, useState } from 'react';
import { get5First, getAll, getRedGoods } from './api/goods';
import './App.scss';
import { GoodsList } from './components/GoodsList';


enum ShowType {
  All = 'all',
  FirstFive = 'firstfive',
  RedColor = 'redcolor'
}

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  async function getGoods(showBy: ShowType) {
    switch(showBy) {
      case ShowType.All:
        setGoods(await getAll());
        break;
      case ShowType.FirstFive:
        setGoods(await get5First());
        break;
      case ShowType.RedColor:
        setGoods(await getRedGoods());
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    getGoods(ShowType.All);
  }, []);

  return (
    <div>
      <GoodsList goods={[...goods]}/>
      <button
        type='button'
        onClick={() => getGoods(ShowType.All)}
      >
        All
      </button>
      <button
        type='button'
        onClick={() => getGoods(ShowType.FirstFive)}
      >
        First5
      </button>
      <button
        type='button'
        onClick={() => getGoods(ShowType.RedColor)}
      >
        Only Red
      </button>
    </div>
  );
}

export default App;
