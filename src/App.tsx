import React, { useState } from 'react';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
import { GoodsList } from './GoodsList';

enum TypesOfGoods {
  Red = 'red',
  All = 'all',
  Five = 'five',
}
export const App: React.FC = () => {
  const [goodsFromServer, GoodsFromServer] = useState<Good[]>([]);

  function handleShow(type: string) {
    switch (type) {
      case TypesOfGoods.All:
        getAll().then(GoodsFromServer);

        return;
      case TypesOfGoods.Five:
        get5First().then(GoodsFromServer);

        return;

      case TypesOfGoods.Red:
        getRedGoods().then(GoodsFromServer);

        return;
    }
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleShow(TypesOfGoods.All)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleShow(TypesOfGoods.Five)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleShow(TypesOfGoods.Red)}
      >
        Load red goods
      </button>

      <GoodsList goods={goodsFromServer} />
    </div>
  );
};
