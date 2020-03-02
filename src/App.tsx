import React, { Component } from 'react';
import { GoodList, Good } from './GoodList';
import './App.css';

const loadGoods = () => {
  const goodsUrl = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

  return fetch(goodsUrl)
    .then(res => res.json());
};

interface State {
  goods: Good[];
}

class App extends Component<{}, State> {
  state = {
    goods: [],
  };

  loadAllGoods = () => {
    loadGoods()
      .then(goods => {
        this.setState({
          goods,
        });
      });
  };

  loadFiveFirstGoods = () => {
    loadGoods()
      .then(goods => {
        this.setState({
          goods: goods.sort(
            (goodA: Good, goodB: Good) => goodA.name.localeCompare(goodB.name),
          ).slice(0, 5),
        });
      });
  };

  loadRedGoods = () => {
    loadGoods()
      .then(goods => {
        this.setState({
          goods: goods.filter((good: Good) => good.color === 'red'),
        });
      });
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          className="goods__button"
          onClick={this.loadAllGoods}
        >
          Load All goods
        </button>
        <button
          type="button"
          className="goods__button"
          onClick={this.loadFiveFirstGoods}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          className="goods__button"
          onClick={this.loadRedGoods}
        >
          Load red goods
        </button>
        <GoodList goods={goods} />
      </>
    );
  }
}

export default App;
