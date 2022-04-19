import React, { useState } from 'react';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import GoodsList from './GoodsList';

type Props = {
  getAll: () => Good[],
  first5Goods: () => Good[],
  redGoods: () => Good[],
};

const App: React.FC<Props> = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  return (
    <>
      <h1>
        Dynamic list of Goods
      </h1>
      <button
        type="button"
        onClick={async () => {
          setGoods(await getAll());
        }}
      >
        Load all goods
      </button>
      <button
        type="button"
        onClick={async () => {
          setGoods(await get5First());
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        onClick={async () => {
          setGoods(await getRedGoods());
        }}
      >
        Load red goods
      </button>
      <GoodsList
        goods={goods}
      />
    </>
  );
};

export default App;
