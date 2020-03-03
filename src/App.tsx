import React, { Component } from 'react';
import './App.css';
import { getGoods } from './Api';
import { GoodsList } from './components/GoodsList';

interface AppState {
  goodsList: Goods;
  isLoaded: boolean;
}

class App extends Component<{}, AppState> {
  state = {
    goodsList: [],
    isLoaded: false,
  };

  loadAllGoods = () => {
    getGoods()
      .then(goods => {
        this.setState({
          goodsList: goods,
          isLoaded: true,
        });
      });
  };

  load5Goods = () => {
    getGoods()
      .then(goods => {
        this.setState({
          goodsList: goods
            .sort((a, b) => a.name.localeCompare(b.name))
            .slice(0, 5),
          isLoaded: true,
        });
      });
  };

  loadRedGoods = () => {
    getGoods()
      .then(goods => {
        this.setState({
          goodsList: goods.filter(good => good.color === 'red'),
          isLoaded: true,
        });
      });
  };

  render() {
    const { goodsList, isLoaded } = this.state;

    return (
      <div className="App">
        <button
          className="button"
          type="button"
          onClick={this.loadAllGoods}
        >
          Load All Goods
        </button>
        <button
          className="button"
          type="button"
          onClick={this.load5Goods}
        >
          Load 5 first goods
        </button>
        <button
          className="button"
          type="button"
          onClick={this.loadRedGoods}
        >
          Load red goods
        </button>
        {isLoaded && <GoodsList goods={goodsList} />}
      </div>
    );
  }
}

export default App;
