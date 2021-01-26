import React from 'react';

import './App.scss';

import { getAll, get5First, getRed } from './api/goods';
import { GoodsList } from './components/GoodsList';

class App extends React.Component {
  state = {
    goods: [],
  }

  getGoods = (callback) => {
    callback()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  render() {
    const { goods } = this.state;

    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          className="buttons"
          onClick={() => this.getGoods(getAll)}
        >
          Load All Goods
        </button>
        {' '}
        <button
          type="button"
          className="buttons"
          onClick={() => this.getGoods(get5First)}
        >
          Load 5 first goods
        </button>
        {' '}
        <button
          type="button"
          className="buttons"
          onClick={() => this.getGoods(getRed)}
        >
          Load red goods
        </button>
        {goods && <GoodsList goods={goods} />}
      </div>
    );
  }
}

export default App;
