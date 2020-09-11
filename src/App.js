import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Goodlist } from './GoodList';

class App extends React.Component {
  state = {
    goods: '',
  }

  showGoods = (func) => {
    func()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        {this.state.goods
        && <Goodlist goods={this.state.goods} />}

        <button
          type="button"
          onClick={() => this.showGoods(getAll)}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={() => this.showGoods(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={() => this.showGoods(getRedGoods)}
        >
          Load red goods
        </button>

      </>
    );
  }
}

export default App;
