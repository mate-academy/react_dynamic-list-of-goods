import React from 'react';
import { GoodsList } from './components/GoodsList/GoodsList';

import './App.scss';

import { getAll, get5First, getRed } from './api/goods';

class App extends React.Component {
  state = {
    goods: '',
  }

  loadAllGoods = () => {
    getAll()
      .then((goods) => {
        this.setState({
          goods,
        });
      });
  }

  loadFirst5 = () => {
    get5First()
      .then((goods) => {
        this.setState({
          goods,
        });
      });
  }

  loadRedGoods = () => {
    getRed()
      .then(goods => this.setState({
        goods,
      }));
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        {goods && <GoodsList goods={goods} />}
        <button
          type="button"
          onClick={this.loadAllGoods}
        >
          Load all goods
        </button>
        <button
          type="button"
          onClick={this.loadFirst5}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={this.loadRedGoods}
        >
          Load red goods
        </button>
      </>
    );
  }
}

export default App;
