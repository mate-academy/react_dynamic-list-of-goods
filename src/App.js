import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components';

export class App extends React.PureComponent {
  state = {
    visibleGoods: [],
  }

  handleGetAll = async() => {
    const goods = await getAll();

    this.setState({ visibleGoods: goods });
  }

  handleGetFive = async() => {
    const goods = await get5First();

    this.setState({ visibleGoods: goods });
  }

  handleGetRed = async() => {
    const goods = await getRedGoods();

    this.setState({ visibleGoods: goods });
  }

  render() {
    const { visibleGoods } = this.state;

    return (
      <div className="wrapper">
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.handleGetAll}
        >
          Load All goods
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={this.handleGetFive}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={this.handleGetRed}
        >
          Load red goods
        </button>
        <GoodsList goods={visibleGoods} />
      </div>
    );
  }
}
