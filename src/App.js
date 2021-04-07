import React from 'react';

import './App.scss';
import { Button } from './Button';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  getAllGoods = () => {
    getAll().then((goods) => {
      this.setState({ goods });
    });
  }

  getFiveFirstGoods = () => {
    get5First().then((goods) => {
      this.setState({ goods });
    });
  }

  getRedGoods = () => {
    getRed().then((goods) => {
      this.setState({ goods });
    });
  }

  resetGoods = () => {
    this.setState({
      goods: [],
    });
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <Button onClick={this.getAllGoods} text="Load All goods" />
        <Button onClick={this.getFiveFirstGoods} text="Load 5 first goods" />
        <Button onClick={this.getRedGoods} text="Load red goods" />
        <Button
          onClick={this.resetGoods}
          text="RESET"
          className="btn btn--reset"
        />

        <GoodsList goodsList={this.state.goods} />
      </>
    );
  }
}

export default App;
