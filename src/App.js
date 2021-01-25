import React from 'react';

import './App.scss';

import { getAll, get5First, getRed } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  };

  loadGoods = async(func) => {
    const goods = await func();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;
    const load = this.loadGoods;

    return (
      <>
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          onClick={() => {
            load(getAll);
          }}
        >
          get All
        </button>

        <button
          type="button"
          onClick={() => {
            load(get5First);
          }}
        >
          get 5 First
        </button>

        <button
          type="button"
          onClick={() => {
            load(getRed);
          }}
        >
          get Red
        </button>

        <ul>
          {goods.map(good => (
            <li
              key={good.id}
              style={{ color: good.color }}
            >
              {good.name}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
