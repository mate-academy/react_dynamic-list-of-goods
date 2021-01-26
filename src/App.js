import React from 'react';
import { GoodsList } from './components/GoodsList';
import './App.scss';

import { getAll, get5First, getRed } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  showAll = () => {
    getAll()
      .then((goods) => {
        this.setState({
          goods,
        });
      });
  }

  show5First = () => {
    get5First()
      .then(goods => (
        this.setState({
          goods,
        })
      ));
  }

  showRedGoods = () => {
    getRed()
      .then(goods => (
        this.setState({
          goods,
        })
      ));
  }

  render() {
    const { goods } = this.state;

    return (
      <main>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={this.showAll}
        >
          Load all goods
        </button>
        <button
          type="button"
          onClick={this.show5First}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={this.showRedGoods}
        >
          Load red goods
        </button>
        <GoodsList goods={goods} />
      </main>
    );
  }
}

export default App;
