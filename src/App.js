import React from 'react';
import { GoodsList } from './components/GoodsList';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  };

  loadAllGoods = () => {
    getAll()
      .then((goods) => {
        this.setState({ goods });
      });
  };

  loadFirstFive = () => {
    get5First()
      .then((goods) => {
        this.setState({ goods });
      });
  };

  loadRed = () => {
    getRedGoods()
      .then((goods) => {
        this.setState({ goods });
      });
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          onClick={this.loadAllGoods}
        >
          Load All Goods
        </button>

        <button
          type="button"
          onClick={this.loadFirstFive}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={this.loadRed}
        >
          Load red goods
        </button>

        {goods.length > 0 && (
          <GoodsList goods={goods} />
        )}
      </>
    );
  }
}

export default App;
