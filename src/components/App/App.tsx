import React from 'react';

import { GoodsList } from '../GoodsList';

import { getAll, get5First, getRedGoods } from '../../api/goods';

// or
// import * as goodsAPI from './api/goods';

import './App.scss';

type State = {
  allGoods: Good[],
};

export class App extends React.Component<{}, State> {
  state = {
    allGoods: [],
  };

  handleGetAll = () => {
    getAll()
      .then(goods => {
        this.setState({
          allGoods: goods,
        });
      });
  };

  handleGetFirstFive = () => {
    get5First()
      .then(goods => {
        this.setState({
          allGoods: goods,
        });
      });
  };

  handleGetRedGoods = () => {
    getRedGoods()
      .then(goods => {
        this.setState({
          allGoods: goods,
        });
      });
  };

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={this.handleGetAll}
        >
          All Goods
        </button>
        <button
          type="button"
          onClick={this.handleGetFirstFive}
        >
          First Five
        </button>
        <button
          type="button"
          onClick={this.handleGetRedGoods}
        >
          Only Red
        </button>
        <GoodsList
          allGoods={this.state.allGoods}
        />
      </>
    );
  }
}
