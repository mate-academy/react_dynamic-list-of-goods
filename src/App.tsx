import React, { useState } from 'react';
import classnames from 'classnames';
import './App.scss';
import { GoodsList } from './GoodsList';
import 'bulma';
import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goodsAll, setGoodsAll] = useState<Good[]>([]);

  const [loadingAll, setLoadingAll] = useState(false);
  const [loadingFiveGoods, setLoadingFiveGoods] = useState(false);
  const [loadingRedGoods, setLoadingRedGoods] = useState(false);

  const handleLoadAllGoods = async () => {
    setLoadingAll(true);
    const listOfTodos = await getAll();

    setGoodsAll(listOfTodos);

    setLoadingAll(false);
  };

  const handleFiveGoods = async () => {
    setLoadingFiveGoods(true);
    const listOfTodos = await get5First();

    setGoodsAll(listOfTodos);

    setLoadingFiveGoods(false);
  };

  const handleRedGoods = async () => {
    setLoadingRedGoods(true);
    const listOfTodos = await getRed();

    setGoodsAll(listOfTodos);

    setLoadingRedGoods(false);
  };

  // ----- variant 2 -----
  // import { getAllTodosApi, getFiveGoodsApi, getRedGoodsApi } from './api/goods';

  // const handleLoadAllGoods = async () => {
  //   setLoadingAll(true);
  //   const listOfTodos = await getAllTodosApi();

  //   setGoodsAll(listOfTodos);

  //   setLoadingAll(false);
  // };

  // const handleFiveGoods = async () => {
  //   setLoadingFiveGoods(true);
  //   const listOfTodos = await getFiveGoodsApi();

  //   setGoodsAll(listOfTodos);

  //   setLoadingFiveGoods(false);
  // };

  // const handleRedGoods = async () => {
  //   setLoadingRedGoods(true);
  //   const listOfTodos = await getRedGoodsApi();

  //   setGoodsAll(listOfTodos);

  //   setLoadingRedGoods(false);
  // };

  return (
    <div className="App">
      <h1 className="title is-2">Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        className={classnames(
          'button is-primary is-medium', { 'is-loading': loadingAll },
        )}
        onClick={handleLoadAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        className={classnames(
          'button is-link is-medium', { 'is-loading': loadingFiveGoods },
        )}
        onClick={handleFiveGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        className={classnames(
          'button is-danger is-medium', { 'is-loading': loadingRedGoods },
        )}
        onClick={handleRedGoods}
      >
        Load red goods
      </button>

      <GoodsList
        goods={goodsAll}

      />
    </div>
  );
};
