import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodList';

import { getAll, get5First, getRedGoods } from './api/goods';

interface State {
  goods: Good[],
}

export class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  selectAllGood = () => {
    getAll()
      .then(goods => {
        this.setState({ goods });
      });
  };

  select5FirstGood = () => {
    get5First()
      .then(sortGoods => {
        this.setState({ goods: sortGoods });
      });
  };

  selectRedGood = () => {
    getRedGoods()
      .then(redGoods => {
        this.setState({ goods: redGoods });
      });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={this.selectAllGood}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={this.select5FirstGood}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={this.selectRedGood}
        >
          Load red goods
        </button>
        <GoodsList goods={goods} />
      </div>
    );
  }
}
