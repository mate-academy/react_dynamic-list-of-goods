import React from 'react';

import getGoods from './api';
import GoodsList from './components/GoodsList/GoodsList';
import Error from './components/Error/Error';
import './App.css';

interface State {
  goods: Good[];
  isLoadingError: boolean;
}

class App extends React.Component<{}, State> {
  state = {
    goods: [],
    isLoadingError: false,
  };

  offLoadingError = () => {
    this.setState({
      isLoadingError: false,
    });
  };

  loadGoods = () => {
    this.offLoadingError();

    getGoods()
      .then(goods => this.setState({
        goods,
      }))
      .catch(() => this.setState({
        isLoadingError: true,
      }));
  };

  loadFiveGoods = () => {
    this.offLoadingError();

    getGoods()
      .then(goods => {
        goods.sort((good1, good2) => good1.name.localeCompare(good2.name));

        this.setState({
          goods: goods.filter((_, index) => index < 5),
        });
      })
      .catch(() => this.setState({
        isLoadingError: true,
      }));
  };

  loadRedGoods = () => {
    this.offLoadingError();

    getGoods()
      .then(goods => this.setState({
        goods: goods.filter(good => good.color === 'red'),
      }))
      .catch(() => this.setState({
        isLoadingError: true,
      }));
  };

  render() {
    return (
      <>
        <h1 className="app__header">Dynamic list of Goods</h1>
        <GoodsList goods={this.state.goods} />
        {this.state.isLoadingError && <Error />}
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
