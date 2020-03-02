import React, { Component } from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';
import { getGoods } from './DATA_FROM_SERVER';

export class App extends Component<{}, StateApp> {
  state = {
    goods: [],
  };

  loadGoods = () => {
    getGoods()
      .then((goods: StateApp['goods']) => {
        this.setState({ goods });
      });
  };

  loadFiveGoods = () => {
    getGoods()
      .then((goods: StateApp['goods']) => {
        this.setState(({
          goods: goods
            .sort((a, b) => a.name.localeCompare(b.name))
            .filter(good => good.id < 6),
        }));
      });
  };

  loadRedGoods = () => {
    getGoods()
      .then((goods: StateApp['goods']) => {
        this.setState(({
          goods: goods.filter(good => good.color === 'red'),
        }));
      });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          type="button"
          onClick={this.loadGoods}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={this.loadFiveGoods}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={this.loadRedGoods}
        >
          Load red goods
        </button>
        {(goods.length
          ? (
            <GoodsList goods={goods} />
          )
          : (
            <p>Noting uploaded yet</p>
          )
        )}
      </div>
    );
  }
}
