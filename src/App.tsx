import React, { useState } from 'react';
import './App.css';
import { getGoods } from './api/api';
import { Product } from './interfaces/Product';
import { GoodsList } from './components/GoodsList';
import { Button } from './components/Button';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const load = () => {
    setIsLoading(true);

    return getGoods().then(data => {
      setIsLoading(false);

      return data;
    });
  };

  const loadAll = (): void => {
    load().then((data: Product[]) => setGoods(data));
  };

  const loadPart = (): void => {
    load().then((data: Product[]) => {
      const goodsList = data
        .sort((a: Product, b: Product) => a.name.length - b.name.length);

      goodsList.length = 5;

      setGoods(goodsList);
    });
  };

  const loadRed = (): void => {
    load().then((data: Product[]) => {
      const goodsList = data.filter((product: Product) => product.color === 'red');

      setGoods(goodsList);
    });
  };

  return (
    <div className="App container">
      <h1 className="center-align">List of goods</h1>
      <div className="buttons">
        <Button
          onClick={loadAll}
          title="Load all"
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
