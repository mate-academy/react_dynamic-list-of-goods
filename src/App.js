import React from 'react';
import { GoodsList } from './components/index';
import './App.scss';

import { getAll, get5First, getRed } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  visibleAll = (callback) => {
    callback()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => this.visibleAll(getAll)}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={() => this.visibleAll(get5First)}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={() => this.visibleAll(getRed)}
        >
          Load red goods
        </button>
        <GoodsList goods={this.state.goods} />
      </>
    );
  }
}

export default App;
