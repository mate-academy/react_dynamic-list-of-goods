import React from 'react';
import './App.scss';

import { GoodsList } from './components/GoodsList';
import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

interface State {
  goods: Good[];
}

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  setAll = () => {
    getAll()
      .then(goods => {
        this.setState({ goods });
      });
  };

  set5 = () => {
    get5First()
      .then(goods => {
        this.setState({ goods });
      });
  };

  setRed = () => {
    getRed()
      .then(goods => {
        this.setState({ goods });
      });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={this.setAll}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={this.set5}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={this.setRed}
        >
          Load red goods
        </button>
        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;
