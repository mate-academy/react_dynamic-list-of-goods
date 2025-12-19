import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { useState } from 'react';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState('');
  
  const loadAllGoods = () => {
    setError('');
    getAll().then(result => setGoods(result)).catch(() => setError('faild to load all goods'));
  };

  const load5First = () => {
    setError('');
    get5First().then(result => setGoods(result)).catch(() => setError('faild the 5 first load'));
  };

  const loadRed = () => {
    setError('');
    getRedGoods().then(result => setGoods(result)).catch(() => setError('faild to load red'));
  };

  
  
 return (

 <div className="App">
    <h1>Dynamic list of Goods</h1>

    <button type="button" data-cy="all-button" onClick = {loadAllGoods}>
      Load all goods
    </button>

    <button type="button" data-cy="first-five-button" onClick = {load5First}>
      Load 5 first goods
    </button>

    <button type="button" data-cy="red-button" onClick = {loadRed}>
      Load red goods
    </button>
    {error && <div>{error}</div>}
    <GoodsList goods={goods} />
  </div>
 );
};
