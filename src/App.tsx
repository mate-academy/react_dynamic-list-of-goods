import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

type State = {
  goods: Good[];
  error: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
    error: '',
  };

  loadAll = () => {
    getAll()
      .then(goods => {
        this.setState({
          goods,
          error: '',
        });
      })
      .catch(() => {
        this.setState({
          error: 'Failed to load goods',
        });
      });
  };

  load5First = () => {
    get5First()
      .then(goods => {
        this.setState({
          goods,
          error: '',
        });
      })
      .catch(() => {
        this.setState({
          error: 'Failed to load goods',
        });
      });
  };

  loadRed = () => {
    getRed()
      .then(goods => {
        this.setState({
          goods,
          error: '',
        });
      })
      .catch(() => {
        this.setState({
          error: 'Failed to load goods',
        });
      });
  };

  render() {
    const { goods, error } = this.state;

    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>

        <button type="button" data-cy="all-button" onClick={this.loadAll}>
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={this.load5First}
        >
          Load 5 first goods
        </button>

        <button type="button" data-cy="red-button" onClick={this.loadRed}>
          Load red goods
        </button>

        {error && <p>{error}</p>}

        <GoodsList goods={goods} />
      </div>
    );
  }
}
