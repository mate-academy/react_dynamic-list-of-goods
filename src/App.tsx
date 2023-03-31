import React, { useEffect, useState } from "react";
import { getFiveFirst, getAll, getRed } from "./api/goods";
import "./App.scss";
import { GoodsList } from "./GoodsList";
import { Good } from "./types/Good";

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  useEffect(() => {
    getAll().then((result) => setGoods(result));
  }, []);

  const handleButtonAllClicked = () => {
    getAll().then((result) => setGoods(result));
  };

  const handleButtonFiveClicked = () => {
    getFiveFirst().then((result) => setGoods(result));
  };

  const handleButtonRedClicked = () => {
    getRed().then((result) => setGoods(result));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleButtonAllClicked}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleButtonFiveClicked}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleButtonRedClicked}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
