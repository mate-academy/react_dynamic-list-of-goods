import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

const App = () => {
  const [currentList, setCurrentList] = useState([]);

  return (
    <>
      <ul>
        {currentList.map(item => (
          <li
            key={item.id}
            className={item.color}
          >
            {item.name}
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="getAll"
        onClick={() => {
          setCurrentList(getAll());
        }}
      >
        Get All
      </button>
      <button
        type="button"
        className="get5first"
        onClick={() => {
          setCurrentList(get5First());
        }}
      >
        get5first
      </button>
      <button
        type="button"
        className="getRed"
        onClick={() => {
          setCurrentList(getRedGoods());
        }}
      >
        getRed
      </button>
    </>
  );
};

export default App;
