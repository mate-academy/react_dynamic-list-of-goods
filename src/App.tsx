import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import ButtonComponent from './components/Button';
import { Good } from './types/Good';

export enum GetFromApi {
  NONE,
  ALL,
  FIVE,
  RED,
}

export const App: React.FC = () => {
  const [value, setValue] = useState(GetFromApi.NONE);
  const [goods, setGoods] = useState<Good[]>([]);

  const handleButtonClick = (action: string) => {
    const key = GetFromApi[action as keyof typeof GetFromApi];

    if (key !== undefined) {
      setValue(key);
    }
  };

  const getFilteredGoods = async () => {
    let fetchedGoods: Good[] = [];

    switch (value) {
      case GetFromApi.ALL:
        fetchedGoods = await getAll();
        break;
      case GetFromApi.FIVE:
        fetchedGoods = await get5First();
        break;
      case GetFromApi.RED:
        fetchedGoods = await getRedGoods();
        break;
      default:
        fetchedGoods = [];
        break;
    }

    setGoods(fetchedGoods);
  };

  useEffect(() => {
    if (value !== GetFromApi.NONE) {
      getFilteredGoods();
    }
  }, [value]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <ButtonComponent onClick={handleButtonClick} />

      {value !== GetFromApi.NONE && <GoodsList goods={goods} />}
    </div>
  );
};
