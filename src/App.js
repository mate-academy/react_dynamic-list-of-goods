import React, { useState } from 'react';
import './App.scss';
import { getAll, get5First, getRed } from './api/goods';
import GoodsList from './components/GoodsList';

const App = () => {
  const [list, setList] = useState([]);

  async function fetchData(fetchMethod) {
    setList(await fetchMethod());
  }

  return (
    <>
      <h1>Dynamic list of Goods</h1>
      <div>
        <button
          type="button"
          onClick={() => fetchData(getAll)}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={() => fetchData(get5First)}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={() => fetchData(getRed)}
        >
          Load red goods
        </button>
      </div>
      <GoodsList list={list} />
    </>
  );
};

export default App;
