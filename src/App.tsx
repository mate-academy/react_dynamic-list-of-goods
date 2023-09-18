import React, { useState } from "react";
import "./App.scss";
import { GoodsList } from "./GoodsList";

import { getAll, get5First, getRed } from "./api/goods";
import { Good } from "./types/Good";

export const App: React.FC = () => {
  const [good, setGood] = useState<Good[]>([]);

  const loadAllGoods = () => {
    getAll().then((data) => {
      return setGood(data);
    });
  };

  const loadFiveGoods = () => {
    get5First().then((data) => {
      return setGood(data);
    });
  };

  const loadOnlyRed = () => {
    getRed().then((data) => {
      return setGood(data);
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadAllGoods}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={loadFiveGoods}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadOnlyRed}>
        Load red goods
      </button>

      <GoodsList goods={good} />
    </div>
  );
};
