import React from 'react';
import './App.css';
import { GoodsList } from './component/GoodsList/GoodsList';
import { getGoods } from './api/goodsListFromServer';

interface State {
  goods: Good[];
}

export class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  loadAll = () => {
    getGoods()
      .then(good => {
        this.setState({ goods: good });
      });
  };

  loadRed = () => {
    getGoods()
      .then(good => {
        this.setState({ goods: good.filter(item => item.color === 'red') });
      });
  };

  loadFirstFive = () => {
    getGoods()
      .then(good => {
        this.setState({
          goods: good.slice(0, 5)
            .sort((a, b) => a.name.localeCompare(b.name)),
        });
      });
  };

  render() {
    const { goods } = this.state;

    return (
      <div>
        <h1>GoodList</h1>
        <button type="button" onClick={this.loadAll}>Load all</button>
        <button type="button" onClick={this.loadRed}>Load red</button>
        <button type="button" onClick={this.loadFirstFive}>Load first 5</button>
        <GoodsList goods={goods} />
      </div>
    );
  }
}
