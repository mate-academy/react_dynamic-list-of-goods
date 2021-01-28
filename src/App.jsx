import React from 'react';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

import './App.scss';

class App extends React.Component {
  state = {
    goods: [],
  };

  getGoods = (filter) => {
    filter().then((response) => {
      this.setState({
        goods: response,
      });
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="container">
        <h1 className="page-title">Dynamic list of Goods</h1>
        <div className="goods">
          <div className="goods__buttons">
            <button
              type="button"
              className="goods__button"
              onClick={() => {
                this.getGoods(getAll);
              }}
            >
              All goods
            </button>
            <button
              type="button"
              className="goods__button"
              onClick={() => {
                this.getGoods(get5First);
              }}
            >
              First five
            </button>
            <button
              type="button"
              className="goods__button"
              onClick={() => {
                this.getGoods(getRedGoods);
              }}
            >
              Red Goods
            </button>
          </div>
          <GoodsList goods={goods} />
        </div>
      </div>
    );
  }
}

export default App;
