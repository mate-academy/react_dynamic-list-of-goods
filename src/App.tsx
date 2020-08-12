import React, { Component } from 'react';
import './App.css';
import GoodsList from './components/GoodsList';
import { Goods, Good } from './components/interfaces';

const GOODSURL = 'https://mate.academy/students-api/goods';

export default class App extends Component {
  state: Goods = {
    goods: [],
  };

  getGoods = () => {
    fetch(GOODSURL)
      .then(res => res.json())
      .then((result) => {
        this.setState({
          goods: result.data,
        });
      });
  };

  get5Goods = () => {
    fetch(GOODSURL)
      .then(res => res.json())
      .then((result) => {
        this.setState({
          goods: result.data
            .sort((a: Good, b: Good) => (a.name).localeCompare(b.name))
            .slice(0, 5),
        });
      });
  };

  getRedGoods = () => {
    fetch(GOODSURL)
      .then(res => res.json())
      .then((result) => {
        this.setState({
          goods: result.data
            .filter((good: Good) => good.color === 'red'),
        });
      });
  };

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <GoodsList goods={this.state.goods} />
        <button type="button" onClick={this.getGoods}>
          Load All good
        </button>
        <button type="button" onClick={this.get5Goods}>
          Load 5 first goods
        </button>
        <button type="button" onClick={this.getRedGoods}>
          Load red goods
        </button>
      </>
    );
  }
}
