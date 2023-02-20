import React, { useState } from "react";
import "./App.scss";
import { GoodsList } from "./GoodsList";
import { getAll, get5First, getRedGoods } from "./api/goods";
import { Good } from "./types/Good";

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetAllGoods = async () => {
    setIsLoading(true);
    const goods = await getAll();

    setGoods(goods);
    setIsLoading(false);
  };

  const handleGetFirstFiveGoods = async () => {
    setIsLoading(true);
    const fiveGoods = await get5First();

    setGoods(fiveGoods);
    setIsLoading(false);
  };

  const handleGetRedGoods = async () => {
    setIsLoading(true);
    const redGoods = await getRedGoods();

    setGoods(redGoods);
    setIsLoading(false);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleGetAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleGetFirstFiveGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleGetRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} loading={isLoading} />
    </div>
  );
};
