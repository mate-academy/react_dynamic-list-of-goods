import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoadAll = () => {
    getAll()
      .then(setGoods)
      .catch(error => setErrorMessage(error.message));
  };

  const handleLoad5First = () => {
    get5First()
      .then(setGoods)
      .catch(error => setErrorMessage(error.message));
  };

  const handleLoadRed = () => {
    getRedGoods()
      .then(setGoods)
      .catch(error => setErrorMessage(error.message));
  };

 return (
   <div className="App">
     <h1>Dynamic list of Goods</h1>

     <button type="button" data-cy="all-button" onClick={handleLoadAll}>
       Load all goods
     </button>

     <button
       type="button"
       data-cy="first-five-button"
       onClick={handleLoad5First}
     >
       Load 5 first goods
     </button>

     <button type="button" data-cy="red-button" onClick={handleLoadRed}>
       Load red goods
     </button>

     {errorMessage && <p>{errorMessage}</p>}

     <GoodsList goods={goods} />
   </div>
 );
};
