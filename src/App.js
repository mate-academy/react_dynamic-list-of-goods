import React, { Component } from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList/GoodsList';

export class App extends Component {
  state = {
    goods: [],
  }

  loadAllGoods = async() => {
    const goods = await getAll();

    this.setState({ goods });
  }

  loadFirst5Goods = async() => {
    const goods = await get5First();

    this.setState({ goods: goods.sort((a, b) => a.name.localeCompare(b.name))
      .slice(0, 5) });
  }

  loadRedGoods = async() => {
    const goods = await getRedGoods();

    this.setState({ goods: goods.filter(good => good.color === 'red') });
  }

  render() {
    const {
      goods,
    } = this.state;

    return (
      <div>
        <h1 align="center">
          Dynamic list of Goods
        </h1>

        <button
          type="button"
          onClick={this.loadAllGoods}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={this.loadFirst5Goods}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={this.loadRedGoods}
        >
          Load red goods
        </button>

        <div className="list">
          {goods.length === 0 ? (
            <p>You have not loaded items from the server yet</p>
          ) : (
            <div className="goodsList">
              <GoodsList goods={goods} />
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default App;
