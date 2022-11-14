import React, { useState } from 'react';
import classnames from 'classnames';
import './App.scss';
import { GoodsList } from './GoodsList';
import 'bulma';
// import { getAll } from './api/goods';
// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';
import { getAllTodosApi, getFiveGoodsApi, getRedGoodsApi } from './api/goods';

export const App: React.FC = () => {
  const [todosAll, setTodosAll] = useState([]);
  // const [todosFive, setTodosFive] = useState([]);

  const [loadingAll, setLoadingAll] = useState(false);
  const [loadingFiveGoods, setLoadingFiveGoods] = useState(false);
  const [loadingRedGoods, setLoadingRedGoods] = useState(false);

  // useEffect(() => {
  //   getAll()
  //     .then(todos => {
  //       setTodos(todos);
  //     });
  // }, []);

  const handleLoadAllGoods = async () => {
    setLoadingAll(true);
    const listOfTodos = await getAllTodosApi();

    setTodosAll(listOfTodos);

    setLoadingAll(false);

    // const todoList = await getAll();

    // setTodos(todoList);
  };

  const handleFiveGoods = async () => {
    setLoadingFiveGoods(true);
    const listOfTodos = await getFiveGoodsApi();

    setTodosAll(listOfTodos);

    setLoadingFiveGoods(false);
  };

  const handleRedGoods = async () => {
    setLoadingRedGoods(true);
    const listOfTodos = await getRedGoodsApi();

    setTodosAll(listOfTodos);

    setLoadingRedGoods(false);
  };

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

      <GoodsList goods={todosAll} />
    </div>
  );
};

// const todos = await getAll();

// setTodos({ todos });

// getAll()
//   .then(todos => {
//     setTodos(todos);
//   });
