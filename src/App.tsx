import { FC, useState } from 'react';
import { Good } from './types/Good';
import { GoodsList } from './components/GoodsList/GoodsList';
import { Buttons } from './components/Buttons';
import { getAll, get5First, getRed } from './api/goods';
import 'bulma/css/bulma.css';
import './App.scss';

export const App: FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getGoodsFromServer = (callback: () => Promise<Good[]>) => {
    setGoods([]);
    setIsLoading(true);

    callback()
      .then(data => {
        setGoods(data);
        setIsLoading(false);
      });
  };

  const getAllGoods = () => {
    getGoodsFromServer(getAll);
  };

  const getFirstFiveGoods = () => {
    getGoodsFromServer(get5First);
  };

  const getRedGoods = () => {
    getGoodsFromServer(getRed);
  };

  return (
    <div className="App container box">
      <h1 className="title has-text-centered">Dynamic list of Goods</h1>

      <Buttons
        getAllGoods={getAllGoods}
        getFirstFiveGoods={getFirstFiveGoods}
        getRedGoods={getRedGoods}
        isLoading={isLoading}
      />

      {goods.length > 0 && (
        <GoodsList goods={goods} />
      )}
    </div>
  );
};
