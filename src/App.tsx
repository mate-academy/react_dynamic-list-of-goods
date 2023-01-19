import React, { useState } from 'react';
import { get5First, getAll, getRedGoods } from './api/goods';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import 'bulma/css/bulma.css';


// стейт - на кожен клік міняємо дані з сервера - передаємо їх як пропси


export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleClickAll = () => {
    getAll().then((data) => setGoods(data))
  }

  const handleClickMax5 = () => {
    get5First().then((data) => setGoods(data))
  }
  const handleClickAllRed = () => {
    getRedGoods().then((data) => setGoods(data))
  }

  return (
    < div className="App" >
      <h1 className='title'>Dynamic list of Goods</h1>

      <button
        className='button margin is-info'
        type="button"
        data-cy="all-button"
        onClick={handleClickAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleClickMax5}
        className='button margin is-info'
      >
        Load 5 first goods
      </button>

      <button
        className='button margin is-info'
        type="button"
        data-cy="red-button"
        onClick={handleClickAllRed}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div >
  )
}
