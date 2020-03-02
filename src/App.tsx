import React from 'react';
import './App.css';
import { Goods } from './Goods';
import { getGoods } from './api/api';

interface AppState {
  isLoaded: boolean;
  goods: Good[];
}

export class App extends React.Component<{}, AppState> {
  state = {
    isLoaded: false,
    goods: [],
  };

  loadAllGoods = () => {
    this.setState({
      isLoaded: true,
    });

    getGoods()
      .then(goods => {
        this.setState({ goods, isLoaded: false });
      });
  };

  loadFirstFiveGoods = () => {
    this.setState({
      isLoaded: true,
    });

    getGoods()
      .then(goods => {
        this.setState({
          goods: goods
            .sort((a: Good, b: Good) => a.name.localeCompare(b.name))
            .filter((good: Good) => good.id <= 5),
          isLoaded: false,
        });
      });
  };

  loadRedGoods = () => {
    this.setState({
      isLoaded: true,
    });

    getGoods()
      .then(goods => {
        this.setState({
          goods: goods
            .filter((good: Good) => good.color === 'red'),
          isLoaded: false,
        });
      });
  };

  render() {
    const { isLoaded, goods } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {isLoaded ? 'loading...' : ''}

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
