import React from 'react';

import getGoods from './api';
import GoodsList from './components/GoodsList/GoodsList';
import './App.css';

interface State {
  goods: Good[];
}

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  loadGoods = () => {
    getGoods().then(goods => this.setState({
      goods,
    }));
  };

  loadFiveGoods = () => {
    getGoods().then(goods => goods.sort((good1, good2) => (good1.name.localeCompare(good2.name))))
      .then(goods => goods.filter((_, index) => index < 5))
      .then(goods => this.setState({
        goods,
      }));
  };

  loadRedGoods = () => {
    getGoods().then(goods => goods.filter(good => good.color === 'red'))
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
          onClick={this.loadGoods}
        >
          Load All goods
        </button>
        <button
          className="app__button"
          type="button"
          onClick={this.loadFiveGoods}
        >
          Load 5 first goods
        </button>
        <button
          className="app__button"
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
