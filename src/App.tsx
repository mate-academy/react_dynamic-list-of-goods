import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

enum TypesOfGoods {
  All = 'all',
  Five = 'five',
  Red = 'red',
}

export const App: React.FC = () => {
  const [goodsFromServer, setGoodsFromServer] = useState<Good[]>([]);

  function handleShowlist(type: string) {
    switch (type) {
      case TypesOfGoods.All:
        getAll().then(setGoodsFromServer);

        return;

      case TypesOfGoods.Five:
        get5First().then(setGoodsFromServer);

        return;

      case TypesOfGoods.Red:
        getRedGoods().then(setGoodsFromServer);

        return;
    }
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleShowlist(TypesOfGoods.All)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleShowlist(TypesOfGoods.Five)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleShowlist(TypesOfGoods.Red)}
      >
        Load red goods
      </button>

      <GoodsList goods={goodsFromServer} />
    </div>
  );
};
