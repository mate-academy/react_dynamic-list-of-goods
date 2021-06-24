import React from 'react';
import GoodList from './GoodList';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export class App extends React.Component {
  state = {
    loadGoods: false,
    goods: [],
  }

  handleLoadAll() {
    getAll()
      .then(res => this.setState(state => ({
        goods: res, loadGoods: true,
      })));
  }

  handleLoad5First() {
    get5First()
      .then(res => this.setState(state => ({
        goods: res, loadGoods: true,
      })));
  }

  handlegetRedGoods() {
    getRedGoods()
      .then(res => this.setState(state => ({
        goods: res, loadGoods: true,
      })));
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={
            () => this.handleLoadAll()
          }
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={() => this.handleLoad5First()}
        >
          load 5 first goods
        </button>

        <button
          type="button"
          onClick={() => this.handlegetRedGoods()}
        >
          load 5 first goods
        </button>

        {this.state.loadGoods
        && (
        <GoodList
          goods={this.state.goods}
        />
        )}
      </>
    );
  }
}
