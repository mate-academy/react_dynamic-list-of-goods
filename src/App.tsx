import React, { useState, useEffect } from 'react';
import './App.css';
import { getGoods } from './helpers/api';
import { GoodsList } from './components/GoodsList'

const FILTER_TYPES = {
  all: 'all goods',
  red: 'red',
  firstFive: '5 first goods',
};

const buttonForFilter = [
  {
    id: '1',
    type: FILTER_TYPES.all,
    name: 'all goods',
  },
  {
    id: '2',
    type: FILTER_TYPES.red,
    name: 'red-color goods',
  },
  {
    id: '3',
    type: FILTER_TYPES.firstFive,
    name: '5 first goods',
  },
]

const App: React.FC = () => {
const [goods, setGoods] =  useState<Good[]>([]);
const [isLoading, loadData] =  useState<boolean>(false);
const [filter, setFilter] = useState<string>('');

useEffect(()=>{
  getGoodsByParams(filter);
  return loadData(false);
}, [filter])

const getGoodsByParams = async (type: string) => {
  loadData(true);
  const goodsFromServer = await getGoods();
  if (type === FILTER_TYPES.all) {
  setGoods(goodsFromServer || []);
  }
  if (type === FILTER_TYPES.red) {
    setGoods(goodsFromServer.filter((good) => (good.color === 'red')) || []);
  }
  if (type === FILTER_TYPES.firstFive) {
    setGoods(goodsFromServer.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5) || []);
  }
}

  return (
    <>
      <h1>Dynamic list of Goods</h1>
      <div className="goods-panel">
        <div>
          {buttonForFilter.map(button => (
            <button
            type="button"
            className="button"
            key={button.id}
            onClick ={() => setFilter(button.type)}
            >
              {button.name}
            </button>
          ))}
        </div>
      {isLoading && (<span>Loading...</span>)}
      <GoodsList goods={goods} />
      </div>
    </>
  );
}

export default App;
