import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

 import { getAll, get5First, getRed, getRedGoods } from './api/goods';
import { event } from 'cypress/types/jquery';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {

  const [allList, setAllList]=useState([])


  const loadAll = () =>{
    getAll().then(setAllList)
  }
  const load5 = () => {
    get5First().then(setAllList)

  }
  const loadRed = () => {
    getRedGoods().then(setAllList)
  }



  return <div className="App">
      <h1>Dynamic list of Goods</h1>

    <button type="button" data-cy="all-button"
       onClick={loadAll}

    >
        Load all goods
      </button>

    <button type="button" data-cy="first-five-button"
    onClick={load5}>
        Load 5 first goods
      </button>

    <button type="button" data-cy="red-button"
      onClick={loadRed}>
        Load red goods
      </button>
      <GoodsList goods={allList} />

    </div>
  ;
}
