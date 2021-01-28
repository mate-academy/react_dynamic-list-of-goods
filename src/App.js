import React from 'react';

import './App.scss';

import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  showAllGoods = () => {
    getAll()
      .then(goods => this.setState({ goods }));
  }

  showFiveGoods = () => {
    get5First()
      .then(sortedFiveGoods => this.setState({ goods: sortedFiveGoods }));
  }

  showRedGoods = () => {
    getRed()
      .then(redGoods => this.setState({ goods: redGoods }));
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => {
            this.showAllGoods();
          }}
        >
          Show all goods
        </button>
        <button
          type="button"
          onClick={() => {
            this.showFiveGoods();
          }}
        >
          Show first 5 goods
        </button>
        <button
          type="button"
          onClick={() => {
            this.showRedGoods();
          }}
        >
          Show red goods
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
