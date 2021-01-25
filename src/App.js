import React from 'react';
import { GoodsList } from './components/GoodsList';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  showAllGoods = () => {
    getAll()
      .then(goods => this.setState({ goods }));
  }

  showFive = () => {
    get5First()
      .then(goods => this.setState({ goods }));
  }

  showRed = () => {
    getRedGoods()
      .then(goods => this.setState({ goods }));
  }

  render() {
    const { goods } = this.state;

    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        <button type="button" onClick={this.showAllGoods}>
          Load All goods
        </button>
        <button type="button" onClick={this.showFive}>
          Load 5 first goods
        </button>
        <button type="button" onClick={this.showRed}>
          Load red goods
        </button>
        {goods.length > 0 && <GoodsList goods={goods} />}
      </div>
    );
  }
}

export default App;
