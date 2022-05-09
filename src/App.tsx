import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList/GoodsList';

const App: React.FC = () => {
  const [goodsList, setGoodsList] = useState([{
    id: 0,
    name: '',
    color: '',
  }]);

  return (
    <>
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        onClick={() => {
          getAll().then(goods => {
            setGoodsList(goods);
          });
        }}
      >
        Show all goods
      </button>

      <button
        type="button"
        onClick={async () => {
          const goods = await get5First();

          setGoodsList(goods);
        }}
      >
        Show 5 first goods
      </button>

      <button
        type="button"
        onClick={async () => {
          const goods = await getRedGoods();

          setGoodsList(goods);
        }}
      >
        Show red goods
      </button>
      {goodsList[0].id !== 0 && <GoodsList listOfGoods={goodsList} />}
    </>
  );
};

export default App;
