import React, { useState, FC } from 'react';
import './App.css';
import { GoodList } from './components/GoodList';
import { getGoods } from './api/api';
import { Good } from './interfaces/Good';
import { Button } from './components/Button';

const App: FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const fetchGoods = async (): Promise<Good[]> => {
    setLoading(true);

    const goodsFromServer = await getGoods<Good>();

    setLoading(false);

    return goodsFromServer;
  };

  const loadGoods = () => {
    fetchGoods().then(data => setGoods(data));
  };

  const loadFirstFive = () => {
    fetchGoods().then((data) => {
      const list = data.sort((a, b) => a.name.length - b.name.length);

      list.length = 5;
      setGoods(list);
    });
  };

  const loadRed = () => {
    fetchGoods().then((data) => {
      const list = data.filter((product) => product.color === 'red');

      setGoods(list);
    });
  };

  return (
    <div className="container">
      <h1>List of Goods</h1>
      <div className="buttons">
        <Button
          title="All goods"
          onClick={loadGoods}
          disabled={isLoading}
        />
        <Button
          title="First 5 goods"
          onClick={loadFirstFive}
          disabled={isLoading}
        />
        <Button
          title="Only red goods"
          onClick={loadRed}
          disabled={isLoading}
        />
      </div>
      <GoodList goods={goods} isLoading={isLoading} />
    </div>
  );
};

export default App;
