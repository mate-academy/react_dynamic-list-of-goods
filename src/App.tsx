import React from 'react';
import './App.css';
import { Goods } from './interface';
import { loadGoods } from './api';
import { GoodsList } from './GoodsList';

interface State {
  goods: Goods[];
}

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  loadAll = () => {
    loadGoods().then(goods => this.setState({
      goods,
    }));
  };

  loadFive = () => {
    loadGoods().then(goods => goods.sort((good1, good2) => (good1.name.localeCompare(good2.name))))
      .then(goods => goods.filter((_, index) => index < 5))
      .then(goods => this.setState({
        goods,
      }));
  };

  loadRed = () => {
    loadGoods().then(goods => goods.filter(good => good.color === 'red'))
      .then(goods => this.setState({
        goods,
      }));
  };

  render() {
    return (
      <>
        <h1 className="app__header">Dynamic list of Goods</h1>
        <GoodsList goods={this.state.goods} />
        <button
          className="app__button"
          type="button"
          onClick={this.loadAll}
        >
          Load All goods
        </button>
        <button
          className="app__button"
          type="button"
          onClick={this.loadFive}
        >
          Load 5 first goods
        </button>
        <button
          className="app__button"
          type="button"
          onClick={this.loadRed}
        >
          Load red goods
        </button>
      </>
    );
  }
}

export default App;
