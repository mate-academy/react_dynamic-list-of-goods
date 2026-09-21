import React from 'react';
import './App.scss';

import { GoodsList } from './GoodsList';
import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

type State = {
  goods: Good[];
};

export class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  loadAllGoods = () => {
    getAll()
      .then(goods => {
        this.setState({
          goods,
        });
      })
      .catch(() => {
        this.setState({
          goods: [],
        });
      });
  };

  loadFirstFiveGoods = () => {
    get5First()
      .then(goods => {
        this.setState({
          goods,
        });
      })
      .catch(() => {
        this.setState({
          goods: [],
        });
      });
  };

  loadRedGoods = () => {
    getRed()
      .then(goods => {
        this.setState({
          goods,
        });
      })
      .catch(() => {
        this.setState({
          goods: [],
        });
      });
  };

  render() {
    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>

        <button type="button" data-cy="all-button" onClick={this.loadAllGoods}>
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={this.loadFirstFiveGoods}
        >
          Load 5 first goods
        </button>

        <button type="button" data-cy="red-button" onClick={this.loadRedGoods}>
          Load red goods
        </button>

        <GoodsList goods={this.state.goods} />
      </div>
    );
  }
}
