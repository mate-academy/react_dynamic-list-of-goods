import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';
import { Good } from './react-app-env';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  // const [allGoods, setAllGoods] = useState([]);

  // const [first5Goods, setFirst5Goods] = useState([]);
  // const [redGoods, setRedGoods] = useState([]);

  return (
    <>
      <h1>Dynamic list of Goods</h1>
      <button
        type="button"
        onClick={() => getAll()
          .then(products => {
            setGoods(products);
          })}
      >
        all
      </button>

      <button
        type="button"
        onClick={() => get5First()
          .then(products => {
            setGoods(products);
          })}
      >
        5
      </button>

      <button
        type="button"
        onClick={() => getRedGoods()
          .then(products => {
            setGoods(products);
          })}
      >
        red
      </button>

      {goods.length > 0 && (
        <GoodsList goods={goods} />
      )}
    </>
  );
};

export default App;
