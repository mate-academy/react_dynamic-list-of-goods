import React, { useState } from 'react';
import './App.scss';
import * as goodsAPI from './api/goods';
import GoodsList from './components/GoodsList';
import Button from './components/Button';

const App: React.FC = () => {
  const [goods, setGoods] = useState <Good[]>([]);

  const getAllGoods = async () => {
    const goodsFromServer = await goodsAPI.getAll();

    setGoods(goodsFromServer);
  };

  const get5FirstGoods = async () => {
    const goodsFromServer = await goodsAPI.get5First();

    setGoods(goodsFromServer);
  };

  const getRedGoods = async () => {
    const goodsFromServer = await goodsAPI.getRedGoods();

    setGoods(goodsFromServer);
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>
      <Button
        text="Load All goods"
        funcName={getAllGoods}
      />
      <Button
        text="Load 5 first goods"
        funcName={get5FirstGoods}
      />
      <Button
        text="Load red goods"
        funcName={getRedGoods}
      />
      <GoodsList goods={goods} />
    </>
  );
};

export default App;
