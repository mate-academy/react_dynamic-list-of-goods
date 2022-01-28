import React from 'react';
import classNames from 'classnames';
import 'bulma';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';

type State = {
  goods: Good[];
  loadingAll: boolean;
  loadingFive: boolean;
  loadingRed: boolean;
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
    loadingAll: false,
    loadingFive: false,
    loadingRed: false,
  };

  getAllGoods = () => {
    this.setState({ loadingAll: true });
    getAll()
      .then(goods => {
        this.setState({ goods });
        this.setState({ loadingAll: false });
      });
  };

  getFiveFirst = () => {
    this.setState({ loadingFive: true });
    get5First()
      .then(goods => {
        this.setState({ goods });
        this.setState({ loadingFive: false });
      });
  };

  getRedGoods = () => {
    this.setState({ loadingRed: true });
    getRedGoods()
      .then(goods => {
        this.setState({ goods });
        this.setState({ loadingRed: false });
      });
  };

  render() {
    const {
      goods,
      loadingAll,
      loadingFive,
      loadingRed,
    } = this.state;

    return (
      <div className="App">
        <section className="goods-block App__goods-block">
          <div className="goods-block__button-container">
            <button
              type="button"
              className={
                classNames('button is-info is-outlined',
                  { 'is-loading': loadingAll })
              }
              onClick={this.getAllGoods}
            >
              Load all goods
            </button>
            <button
              type="button"
              className={
                classNames('button is-info is-outlined',
                  { 'is-loading': loadingFive })
              }
              onClick={this.getFiveFirst}
            >
              Load 5 first goods
            </button>
            <button
              type="button"
              className={
                classNames('button is-info is-outlined',
                  { 'is-loading': loadingRed })
              }
              onClick={this.getRedGoods}
            >
              Load red goods
            </button>
          </div>
          {goods.length > 0
          && !loadingAll
          && !loadingFive
          && !loadingRed
          && <GoodsList goods={goods} />}
        </section>
      </div>

    );
  }
}

export default App;
