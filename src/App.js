import React, { useState } from 'react';
import { getAll, get5First, getRedGoods } from './api/goods';
import GoodsList from './components/GoodsList';
import 'bulma';
import './App.scss';

const App = () => {
  const [goods, setList] = useState([]);

  async function fetchData(fetchMethod) {
    setList(await fetchMethod());
  }

  return (
    <div className="content">
      <div className="content__inner">
        <h1>Dynamic list of Goods</h1>
        <button
          className="button is-primary content__button"
          type="button"
          onClick={() => fetchData(getAll)}
        >
          Load All goods
        </button>
        <button
          className="button is-warning content__button"
          type="button"
          onClick={() => fetchData(get5First)}
        >
          Load 5 first goods
        </button>
        <button
          className="button is-danger content__button"
          type="button"
          onClick={() => fetchData(getRedGoods)}
        >
          Load red goods
        </button>
        <GoodsList goods={goods} />
      </div>
    </div>
  );
};

export default App;
