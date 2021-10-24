import React from 'react';
import './App.scss';

import { get5First, getAll, getRed } from './api/goods';
import { GoodsList } from './components/GoodsList';
import { Button } from './components/Button';
// or
// import * as goodsAPI from './api/goods';
class App extends React.Component {
  state = {
    goods: null,
  };

  getAllGoods = () => {
    getAll().then(goods => this.setState({ goods }));
  };

  getFiveGods = () => {
    get5First().then(goods => this.setState({ goods }));
  };

  getRedGoods = () => {
    getRed().then(goods => this.setState({ goods }));
  };

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <Button callback={this.getAllGoods} buttonText="getAll" />
        <Button callback={this.getFiveGods} buttonText="get five" />
        <Button callback={this.getRedGoods} buttonText="get red" />
        {this.state.goods && <GoodsList goods={this.state.goods} />}
      </>
    );
  }
}

export default App;
