import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [state, setState] = useState<Good[]>([])

  const handleClickButtonLoadAllGoods = () => {
    getAll().then(
    (allFromServer) => setState(allFromServer)
    );
  };

  const handleClickButtonFirst5Goods = () => {
    get5First().then((onlyFiveFirstFromServer) => setState(onlyFiveFirstFromServer))
  };
  
  const handleClickButtonOnlyRed = () => {
    getRedGoods().then((onlyRedGoods) => setState(onlyRedGoods))
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleClickButtonLoadAllGoods}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={handleClickButtonFirst5Goods}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleClickButtonOnlyRed}>
        Load red goods
      </button>

      <GoodsList goods={state} />
    </div>
  );
}
