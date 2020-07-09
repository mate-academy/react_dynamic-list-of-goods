import React, { useState, FC } from 'react';
import './App.css';
import { getGoods } from './api/api';
import { Product } from './interfaces/Product';
import { GoodsList } from './components/GoodsList';
import { Button } from './components/Button';

const App: FC = () => {
  const [goods, setGoods] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const fetchGoods = async (): Promise<Product[]> => {
    setLoading(true);

    const goodsFromServer = await getGoods<Product>();

    setLoading(false);

    return goodsFromServer;
  };

  const loadGoods = () => {
    fetchGoods().then(data => setGoods(data));
  };

  const loadPart = () => {
    fetchGoods().then((data) => {
      const goodsList = data.sort((a, b) => a.name.length - b.name.length);

      goodsList.length = 5;
      setGoods(goodsList);
    });
  };

  const loadRed = () => {
    fetchGoods().then((data) => {
      const goodsList = data.filter((product) => product.color === 'red');

      setGoods(goodsList);
    });
  };

  return (
    <div className="App container">
      <h1 className="center-align">List of goods</h1>
      <div className="buttons">
        <Button
          onClick={loadGoods}
          title="Load all goods"
          isDisabled={isLoading}
        />
        <Button
          onClick={loadPart}
          title="Load first 5 goods"
          isDisabled={isLoading}
        />
        <Button
          onClick={loadRed}
          title="Load red"
          isDisabled={isLoading}
        />
      </div>
      <GoodsList goods={goods} isLoading={isLoading} />
    </div>
  );
};

export default App;
