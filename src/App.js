import React from 'react';

import './App.scss';

import { getAll, get5First, getRed } from './api/goods';
import { GoodsList } from './components/GoodsList';

class App extends React.Component {
  state = {
    goods: [],
  }

  getGoods = (getFunc) => {
    getFunc().then(list => this.setState({ goods: list }));
  }

  render() {
    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>

        <button type="button" onClick={() => this.getGoods(getAll)}>
          Load All goods
        </button>
        <button type="button" onClick={() => this.getGoods(get5First)}>
          Load 5 first goods
        </button>
        <button type="button" onClick={() => this.getGoods(getRed)}>
          Load red goods
        </button>

        <GoodsList goods={this.state.goods} />
      </div>
    );
  }
}

export default App;
