import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';
import * as goodsAPI from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  getGoods = (promise) => {
    promise.then((goods) => {
      this.setState({
        goods,
      });
    });
  }

  loadAllGoods = () => {
    this.getGoods(goodsAPI.getAll());
  }

  loadFirstFiveGoods = () => {
    this.getGoods(goodsAPI.get5First());
  }

  loadRedGoods = () => {
    this.getGoods(goodsAPI.getRed());
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <GoodsList goods={goods} />
        <button
          type="button"
          onClick={this.loadAllGoods}
        >
          Load all goods
        </button>

        <button
          type="button"
          onClick={this.loadFirstFiveGoods}
        >
          Load first five goods
        </button>

        <button
          type="button"
          onClick={this.loadRedGoods}
        >
          Load red good
        </button>
      </>
    );
  }
}

export default App;
