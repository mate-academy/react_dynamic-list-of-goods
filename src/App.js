import React from 'react';
import { GoodsList } from './components/GoodsList';
import './App.scss';

import { getAll, get5First, getRed } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  showGoods = (callback) => {
    callback()
      .then((goods) => {
        this.setState({
          goods,
        });
      });
  }

  render() {
    const { goods } = this.state;

    return (
      <main>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => this.showGoods(getAll)}
        >
          Load all goods
        </button>
        <button
          type="button"
          onClick={() => this.showGoods(get5First)}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={() => this.showGoods(getRed)}
        >
          Load red goods
        </button>
        <GoodsList goods={goods} />
      </main>
    );
  }
}

export default App;
