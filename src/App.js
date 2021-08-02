import React from 'react';

import './App.scss';
import 'bulma';
import { GoodList } from './components/GoodList';
import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  setGoods = (getGoods) => {
    getGoods().then((goods) => {
      this.setState({ goods });
    });
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>
        <div className="App__button">
          <button
            type="button"
            className="button is-primary"
            onClick={() => this.setGoods(getAll)}
          >
            Load ALL goods
          </button>
          <button
            type="button"
            className="button is-link"
            onClick={() => this.setGoods(get5First)}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            className="button is-danger"
            onClick={() => this.setGoods(getRedGoods)}
          >
            Load red goods
          </button>
        </div>
        <GoodList goods={goods} />
      </div>
    );
  }
}

export default App;
