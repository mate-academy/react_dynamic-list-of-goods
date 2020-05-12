import React from 'react';
import './App.css';

import { getGoods } from './helpers/goods';

import { GoodsList, Good, GoodsArr } from './components/GoodsList';


class App extends React.Component<{}, GoodsArr> {
  state = {
    goods: [],
  };

  loadAll = () => {
    getGoods()
      .then((goodsFromService: Good[]) => {
        this.setState({
          goods: goodsFromService,
        });
      });
  };

  handleFirstItem = (num: number) => {
    getGoods()
      .then((goodsFromService: Good[]) => {
        this.setState({
          goods: goodsFromService.sort((a, b) => a.name.localeCompare(b.name)).slice(0, num),
        });
      });
  };

  handleRedItem = () => {
    getGoods()
      .then((goodsFromService: Good[]) => {
        this.setState({
          goods: goodsFromService.filter(item => item.color === 'red'),
        });
      });
  };

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <GoodsList goods={this.state.goods} />
        <button type="button" onClick={this.loadAll}>Load All goods</button>
        <button type="button" onClick={() => this.handleFirstItem(5)}>Load 5 first goods</button>
        <button type="button" onClick={this.handleRedItem}>Load red goods</button>
      </>

    );
  }
}

export default App;
