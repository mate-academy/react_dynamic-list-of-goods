/*eslint-disable*/

import React, {useState} from 'react';
import './App.scss';
import type { Good } from './types/Good';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [pickedGoods, setPickedGoods] = useState<Good[]>([]);

  const handleLoadAll = () => {goodsAPI.getAll()
    .then(goods => setPickedGoods(goods))
    .catch(error => {
    console.error('Failed to load goods:', error)}
  )};

  const handleLoad5First = () => {goodsAPI.get5First()
    .then(goods => setPickedGoods(goods))
    .catch(error => {console.error('Failed to load goods:', error)}
  )};

  const handleLoadReadGoods = () => {goodsAPI.getRedGoods()
    .then(goods => setPickedGoods(goods))
    .catch(error => {console.error('Failed to load goods:', error)}
  )};
 

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" 
        data-cy="all-button"
        onClick={handleLoadAll}
      >
        Load all goods
      </button>

      <button type="button" 
        data-cy="first-five-button"
        onClick={handleLoad5First}
      >
        Load 5 first goods
      </button>

      <button type="button" 
        data-cy="red-button"
        onClick={handleLoadReadGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={pickedGoods} />
    </div>
  );
};
