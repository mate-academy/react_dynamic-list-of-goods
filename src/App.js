import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodList';

class App extends React.Component {
  state = {
    goods: [],
  };

  getServerGoods = (callback) => {
    callback().then((goods) => {
      this.setState({
        goods,
      });
    });
  }

  render() {
    const { goods } = this.state;

    return (
      <React.Fragment>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => {
            this.getServerGoods(getAll);
          }}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={() => {
            this.getServerGoods(get5First);
          }}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={() => {
            this.getServerGoods(getRedGoods);
          }}
        >
          Load red goods
        </button>
        <GoodsList goods={goods} />
      </React.Fragment>
    );
  }
}

export default App;
