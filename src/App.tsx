import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goodsList, setGoodsList] = useState<Good[]>([]);

  const loadAllGoods = () => {
    goodsAPI
      .getAll()
      .then(data => {
        setGoodsList(data);
      })
      .catch(() => {
        alert('Erro ao carregar produtos.');
      });
  };

  const loadFiveFirstGoods = () => {
    goodsAPI
      .get5First()
      .then(data => {
        setGoodsList(data);
      })
      .catch(() => {
        alert('Erro ao carregar produtos.');
      });
  };

  const loadRedGoods = () => {
    goodsAPI
      .getRedGoods()
      .then(data => {
        setGoodsList(data);
      })
      .catch(() => {
        alert('Erro ao carregar produtos.');
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={loadFiveFirstGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goodsList} />
    </div>
  );
};
