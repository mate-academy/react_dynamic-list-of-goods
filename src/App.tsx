import React, { useEffect, useState } from 'react';
import './App.scss';

import { Good } from './react-app-env';

import { GoodsList } from './components/GoodList';

import { getAll, get5First, getRedGoods } from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  useEffect(() => {
    getAll().then((result: Good[]) => {
      return setGoods(result);
    });
  }, []);

  const getAllGoods = () => {
    getAll().then((result: Good[]) => {
      return setGoods(result);
    });
  };

  const getFive = () => {
    get5First().then((result: Good[]) => {
      return setGoods(result);
    });
  };

  const getRed = () => {
    getRedGoods().then((result: Good[]) => {
      return setGoods(result);
    });
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>

      {goods.length > 0 && (
        <GoodsList goods={goods} />
      )}

      <button type="button" onClick={getAllGoods}>Load All goods</button>
      <button type="button" onClick={getFive}>Load 5 first goods</button>
      <button type="button" onClick={getRed}>Load red goods</button>
    </>
  );
};

export default App;

/*
<button type="button" onClick={get5First(setGoods)}>Load 5 first goods</button> *
/* <button type="button" onClick={getRedGoods(setGoods)}>Load red goods</button> */
