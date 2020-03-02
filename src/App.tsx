import React from 'react';
import './App.css';
import { getGoods } from './api/api';
import { GoodsList } from './components/GoodsList/GoodsList';

interface AppState {
  goods: Good[];
}

export class App extends React.Component<{}, AppState> {
  state = {
    goods: [],
  };

  downloadAllGoods = () => {
    getGoods().then(goods => {
      this.setState({ goods });
    });
  };

  downloadFiveGoods = () => {
    getGoods().then(goods => {
      this.setState({
        goods: goods
          .sort((a: Good, b: Good) => a.name.localeCompare(b.name))
          .slice(0, 5),
      });
    });
  };

  downloadRedGoods = () => {
    getGoods().then(goods => {
      this.setState({
        goods: goods.filter((good: Good) => good.color === 'red'),
      });
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          className="button"
          onClick={this.downloadAllGoods}
        >
          All goods
        </button>
        <button
          type="button"
          className="button"
          onClick={this.downloadFiveGoods}
        >
          Five goods
        </button>
        <button
          type="button"
          className="button"
          onClick={this.downloadRedGoods}
        >
          Red goods
        </button>
        <GoodsList goods={goods} />
      </div>
    );
  }
}
