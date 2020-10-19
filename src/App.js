import React, { Component } from 'react';
import classnames from 'classnames';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList/GoodsList';

export class App extends Component {
  state = {
    goods: [],
    loading: false,
  }

  loadAllGoods = async() => {
    this.setState({ loading: true });
    const goods = await getAll();

    this.setState({ goods });
  }

  loadFirst5Goods = async() => {
    this.setState({ loading: true });
    const goods = await get5First();

    this.setState({ goods: goods.sort((a, b) => a.name.localeCompare(b.name))
      .slice(0, 5) });
  }

  loadRedGoods = async() => {
    this.setState({ loading: true });
    const goods = await getRedGoods();

    this.setState({ goods: goods.filter(good => good.color === 'red') });
  }

  render() {
    const { goods, loading } = this.state;

    return (
      <>
        <h1 align="center">
          Dynamic list of Goods
        </h1>
        <div className="list">
          {goods.length === 0 ? (
            <>
              <button
                type="button"
                className={classnames('button', 'is-lint',
                  { 'is-loading': loading })}
                onClick={this.loadAllGoods}
              >
                Load All goods
              </button>
              <button
                type="button"
                className={classnames('button', 'is-lint',
                  { 'is-loading': loading })}
                onClick={this.loadFirst5Goods}
              >
                Load 5 first goods
              </button>
              <button
                type="button"
                className={classnames('button', 'is-lint',
                  { 'is-loading': loading })}
                onClick={this.loadRedGoods}
              >
                Load red goods
              </button>
            </>
          ) : (
            <div className="goodsList">
              <GoodsList goods={goods} />
            </div>
          )}
        </div>
      </>
    );
  }
}
export default App;
