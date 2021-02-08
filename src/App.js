import React, { useState } from 'react';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodList } from './components/GoodList/GoodList';

import './App.scss';

const App = () => {
  const [stateList, setStateList] = useState([]);

  const buttonHandler = (callback) => {
    callback()
      .then(result => setStateList(result));
  };

  return (
    <>
      <button
        type="button"
        onClick={() => buttonHandler(getAll)}
      >
        Load All goods
      </button>
      <button
        type="button"
        onClick={() => buttonHandler(get5First)}
      >
        Load 5 first goods
      </button>
      <button type="button" onClick={() => buttonHandler(getRedGoods)}>
        Load red goods
      </button>
      <GoodList list={stateList} />
    </>
  );
};

export default App;
