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

  handleLoadAll = () => {
    getAll()
      .then(goods => {
        this.setState({ goods });
      })
      .catch(() => {});
  };

  handleLoad5First = () => {
    get5First()
      .then(goods => {
        this.setState({ goods });
      })
      .catch(() => {});
  };

  handleLoadRed = () => {
    getRed()
      .then(goods => {
        this.setState({ goods });
      })
      .catch(() => {});
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>

        <button type="button" data-cy="all-button" onClick={this.handleLoadAll}>
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={this.handleLoad5First}
        >
          Load 5 first goods
        </button>

        <button type="button" data-cy="red-button" onClick={this.handleLoadRed}>
          Load red goods
        </button>

        <GoodsList goods={goods} />
      </div>
    );
  }
}
