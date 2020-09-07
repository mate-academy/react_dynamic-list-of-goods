import React, { useState } from 'react';
import './App.scss';

const App = () => {
  const [currentList, setCurrentList] = useState([]);

  const fetchData = async function() {
    const API_URL
      = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

    const response = await fetch(API_URL);

    return (await response).json();
  };

  const getAll = () => {
    fetchData().then(data => setCurrentList(data));
  };

  const get5First = () => {
    fetchData().then(data => setCurrentList(data
      .slice(0, 5)));
  };

  const getRedGoods = () => {
    fetchData().then(data => setCurrentList(data
      .filter(good => good.color === 'red')));
  };

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
        onClick={getAll}
      >
        Get All
      </button>
      <button
        type="button"
        className="get5first"
        onClick={get5First}
      >
        get5first
      </button>
      <button
        type="button"
        className="getRed"
        onClick={getRedGoods}
      >
        getRed
      </button>
    </>
  );
};

export default App;
