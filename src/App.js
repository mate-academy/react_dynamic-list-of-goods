import React from 'react';
import { GoodsList } from './GoodsList';

import './App.scss';

import { getAll, get5First, getRed } from './api/goods';

class App extends React.Component {
  state = {
    goods: null,
  };

  getAllGoods = async() => {
    const goods = await getAll();

    this.setState({ goods });
  };

  getFiveGoods = async() => {
    const goods = await get5First();

    this.setState({ goods });
  };

  getRedGoods = async() => {
    const goods = await getRed();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button type="button" onClick={this.getAllGoods}>
          All goods
        </button>
        <button type="button" onClick={this.getFiveGoods}>
          5 first goods
        </button>
        <button type="button" onClick={this.getRedGoods}>
          Red goods
        </button>
        {goods && <GoodsList goods={goods} />}
      </>
    );
  }
}

export default App;
