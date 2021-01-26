import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

class App extends React.Component {
  state = {
    goods: [],
  }

  all = () => {
    getAll()
      .then(goodsFromServer => this.setState({ goods: goodsFromServer }));
  }

  red = () => {
    getRedGoods().then(result => this.setState({ goods: result }));
  }

  five = () => {
    get5First()
      .then(goodsFromServer => this.setState({ goods: goodsFromServer }));
  }

  render() {
    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        <GoodsList
          goods={this.state.goods}
        />
        <button
          onClick={this.all}
          type="button"
        >
          Show All
        </button>
        <button
          onClick={this.five}
          type="button"
        >
          5 first
        </button>
        <button
          onClick={this.red}
          type="button"
        >
          Red only
        </button>
      </div>
    );
  }
}

export default App;
