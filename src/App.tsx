import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or import { getAll, get5First, getRed } from './api/goods';
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [allUsers, setAllUsers] = useState<Good[]>([]);
  const [allClicked, setAllClicked] = useState(false);
  const [fiveUsers, setFiveUsers] = useState<Good[]>([]);
  const [load5Clicked, setLoad5Clicked] = useState(false);
  const [redUsers, setRedUsers] = useState<Good[]>([]);
  const [redClicked, setRedClicked] = useState(false);

  useEffect(() => {
    getAll().then(setAllUsers);
    get5First().then(setFiveUsers);
    getRedGoods().then(setRedUsers);
  }, [allClicked, load5Clicked, redClicked]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          setRedClicked(false);
          setLoad5Clicked(false);
          setAllClicked(true);
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          setAllClicked(false);
          setRedClicked(false);
          setLoad5Clicked(true);
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          setAllClicked(false);
          setLoad5Clicked(false);
          setRedClicked(true);
        }}
      >
        Load red goods
      </button>

      {allClicked && (
        <GoodsList goods={allUsers} />
      )}

      {load5Clicked && (
        <GoodsList goods={fiveUsers} />
      )}

      {redClicked && (
        <GoodsList goods={redUsers} />
      )}
    </div>
  );
};
