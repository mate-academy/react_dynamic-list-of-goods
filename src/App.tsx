import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRed } from './api/goods';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';


export const App: React.FC = () => {

  const [goods,setGoods] = useState<Good[]>([]);
  const loadingGoodType = async (type: 'all' | 'first5' | 'red') => {

    let serchResult: Good[] = [];



    switch (type) {
      case 'all':
        serchResult = await getAll();
        break;
      case 'first5':
        serchResult = await get5First();
        break;
      case 'red':
        serchResult = await getRed();
        break;
      default:
        break;
    }

    setGoods(serchResult);

  }







  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => loadingGoodType('all')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => loadingGoodType('first5')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => loadingGoodType('red')}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
