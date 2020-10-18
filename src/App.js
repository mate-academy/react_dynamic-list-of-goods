import React from 'react';

import './App.scss';

import { GoodsList } from './components/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  };

  allGoods = () => {
    getAll()
      .then(goods => this.setState({
        goods,
      }));
  };

  fiveGoods = () => {
    get5First()
      .then(goods => this.setState({
        goods,
      }));
  };

  onlyRedGoods = () => {
    getRedGoods()
      .then(goods => this.setState({
        goods,
      }));
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={this.allGoods}
        >
          Get all
        </button>
        <button
          type="button"
          onClick={this.fiveGoods}
        >
          Get 5 first goods
        </button>
        <button
          type="button"
          onClick={this.onlyRedGoods}
        >
          Only red goods
        </button>
        {goods.length > 0 && (
          <GoodsList goods={goods} />
        )}
      </>
    );
  }
}

export default App;
