import React from 'react';
import './App.css';
import { Goods } from './Goods';
import { getGoods } from './api/api';

interface AppState {
  isLoading: boolean;
  goods: Good[];
}

export class App extends React.Component<{}, AppState> {
  state = {
    isLoading: false,
    goods: [],
  };

  loadAllGoods = () => {
    this.setState({
      isLoading: true,
    });

    getGoods()
      .then(goods => {
        this.setState({ goods, isLoading: false });
      });
  };

  loadFirstFiveGoods = () => {
    this.setState({
      isLoading: true,
    });

    getGoods()
      .then(goods => {
        this.setState({
          goods: goods
            .sort((a: Good, b: Good) => a.name.localeCompare(b.name))
            .filter((good: Good) => good.id <= 5),
          isLoading: false,
        });
      });
  };

  loadRedGoods = () => {
    this.setState({
      isLoading: true,
    });

    getGoods()
      .then(goods => {
        this.setState({
          goods: goods
            .filter((good: Good) => good.color === 'red'),
          isLoading: false,
        });
      });
  };

  render() {
    const { isLoading, goods } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {isLoading && 'loading...'}

        <Goods goods={goods} />

        <button type="button" onClick={this.loadAllGoods}>
          Load All goods
        </button>
        <button type="button" onClick={this.loadFirstFiveGoods}>
          Load 5 first goods
        </button>
        <button type="button" onClick={this.loadRedGoods}>
          Load red goods
        </button>
      </div>
    );
  }
}
