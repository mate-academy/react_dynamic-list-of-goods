import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';
import { getGoods } from './api/api';

interface State {
  isShownAll: boolean;
  isShownFive: boolean;
  isShownRed: boolean;
  goods: Good[];
}

class App extends React.Component<{}, State> {
  state = {
    goods: [],
    isShownAll: true,
    isShownFive: true,
    isShownRed: true,
  };

  loadGoods = () => {
    getGoods().then(goods => this.setState({
      goods,
      isShownAll: false,
      isShownFive: true,
      isShownRed: true,
    }));
  };

  loadFiveGoods = () => {
    getGoods().then(goods => this.setState({
      goods: goods.sort((a: Good, b: Good) => a.name.localeCompare(b.name))
        .slice(0, 5),
      isShownAll: true,
      isShownFive: false,
      isShownRed: true,
    }));
  };

  loadRedGoods = () => {
    getGoods().then(goods => this.setState({
      goods: goods.filter((good: Good) => good.color === 'red'),
      isShownAll: true,
      isShownFive: true,
      isShownRed: false,
    }));
  };

  render() {
    const {
      goods,
      isShownAll,
      isShownFive,
      isShownRed,
    } = this.state;

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
