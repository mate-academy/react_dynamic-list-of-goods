/* eslint-disable no-console */
import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [jsonData, setJsonData] = useState<Good[]>([]);

  const fetchAllGoods = async () => {
    try {
      const goods = await getAll();

      setJsonData(goods);
    } catch (error) {
      console.error('Error fetching JSON data:', error);
    }
  };

  const fetch5FirstGoods = async () => {
    try {
      const goods = await get5First();

      setJsonData(goods);
    } catch (error) {
      console.error('Error fetching JSON data:', error);
    }
  };

  const fetchRedGoods = async () => {
    try {
      const goods = await getRedGoods();

      setJsonData(goods);
    } catch (error) {
      console.error('Error fetching JSON data:', error);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button onClick={fetchAllGoods} type="button" data-cy="all-button">
        Load all goods
      </button>

      <button
        onClick={fetch5FirstGoods}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button onClick={fetchRedGoods} type="button" data-cy="red-button">
        Load red goods
      </button>

      <GoodsList goods={jsonData} />
    </div>
  );
};
