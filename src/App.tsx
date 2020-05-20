import React from 'react';
import './App.css';
import { GoodsList } from './component/GoodsList/GoodsList';
import { getGoods } from './api/goodsListFromServer';

interface State {
  goods: Good[];
}

export class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  loadAll = () => {
    getGoods()
      .then(goods => {
        this.setState({ goods });
      });
  };

  loadRed = () => {
    getGoods()
      .then(goods => {
        this.setState({ goods: goods.filter(item => item.color === 'red') });
      });
  };

  loadFirstFive = () => {
    getGoods()
      .then(goods => {
        this.setState({
          goods: goods.slice(0, 5)
            .sort((a, b) => a.name.localeCompare(b.name)),
        });
      });
  };

  render() {
    const { goods } = this.state;

    return (
      <div>
        <h1>GoodList</h1>
        <button type="button" onClick={this.loadAll}>
          Load all
        </button>
        <button type="button" onClick={this.loadRed}>
          Load red
        </button>
        <button type="button" onClick={this.loadFirstFive}>
          Load first 5
        </button>
        <GoodsList goods={goods} />
      </div>
    );
  }
}
