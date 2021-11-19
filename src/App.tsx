import React, { useState } from 'react';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';

const App: React.FC = () => {
  const [data, setData] = useState<Good[]>();
  const getGoods = async (type: () => Promise<Good[]>) => {
    const goods = await type();

    setData(goods);
  };

  return (
    <div>
      <h1>
        Goods
      </h1>
      <button
        type="button"
        onClick={() => {
          getGoods(getAll);
        }}
      >
        Get all
      </button>
      <button
        type="button"
        onClick={() => {
          getGoods(get5First);
        }}
      >
        Get 5 first
      </button>
      <button
        type="button"
        onClick={() => {
          getGoods(getRedGoods);
        }}
      >
        Get red only
      </button>
      {data?.map(({ name, color, id }) => (
        <h2 style={{ color }} key={id}>{name}</h2>
      ))}
    </div>
  );
};

export default App;
