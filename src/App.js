import React from 'react';
import { getGoods } from './goodsApi';
import GoodsList from './GoodsList';
import './App.css';

class App extends React.Component {
  state = {
    goods: [],
    isShownAll: true,
    isShownFive: true,
    isShownRed: true,
  }

  loadGoods = () => {
    getGoods().then(goods => this.setState({
      goods,
      isShownAll: false,
      isShownFive: true,
      isShownRed: true,
    }));
  }

  loadFiveGoods = () => {
    getGoods().then(goods => this.setState({
      goods: goods.sort((a, b) => a.name.localeCompare(b.name))
        .slice(0, 5),
      isShownAll: true,
      isShownFive: false,
      isShownRed: true,
    }));
  }

  loadRedGoods = () => {
    getGoods().then(goods => this.setState({
      goods: goods.filter(good => good.color === 'red'),
      isShownAll: true,
      isShownFive: true,
      isShownRed: false,
    }));
  }

  render() {
    const { goods, isShownAll, isShownFive, isShownRed } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {isShownAll
          ? (
            <button
              type="button"
              onClick={this.loadGoods}
            >
            Load goods
            </button>
          )
          : ''}

        {isShownFive
          ? (
            <button
              type="button"
              onClick={this.loadFiveGoods}
            >
            Load 5 first goods
            </button>
          )
          : ''}

        {isShownRed
          ? (
            <button
              type="button"
              onClick={this.loadRedGoods}
            >
            Load red goods
            </button>
          )
          : ''}

        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;
