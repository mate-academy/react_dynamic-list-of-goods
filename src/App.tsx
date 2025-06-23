import React from 'react';
import './App.scss';
import { useState } from 'react';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {

  const [goodlist, setGoodList] = useState<Good[]>([]);


  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={()=>getAll().then(setGoodList)}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={()=>get5First().then(setGoodList)}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={()=>getRedGoods().then(setGoodList)}>
        Load red goods
      </button>

      <GoodsList goods={goodlist} />
    </div>
  );
};
