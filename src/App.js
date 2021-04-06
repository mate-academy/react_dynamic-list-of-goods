import React from 'react';

import { GoodsList } from './components/GoodsList';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  showGoods = async(callback) => {
    const goods = await callback();

    this.setState({ goods });
  }

  showAllGoods = () => {
    this.showGoods(getAll);
  }

  showFirst5Goods = () => {
    this.showGoods(get5First);
  }

  showRedGoods = () => {
    this.showGoods(getRedGoods);
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="goods">
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={this.showAllGoods}
        >
          All goods
        </button>
        {' '}
        <button
          type="button"
          onClick={this.showFirst5Goods}
        >
          First five goods
        </button>
        {' '}
        <button
          type="button"
          onClick={this.showRedGoods}
        >
          Red goods
        </button>

        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;
