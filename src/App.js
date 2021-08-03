import React from 'react';

import './App.scss';
import { GoodsList } from './components/GoodsList';
import { getAll, get5First, getRed } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  getGoods = (method) => {
    method.then(goods => this.setState({ goods }));
  };

  render() {
    const { state, getGoods } = this;
    const { goods } = state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <section className="list-block">
          <div className="btn-block">
            <button
              className="btn"
              type="button"
              onClick={
                () => {
                  getGoods(getAll());
                }
              }
            >
              All goods
            </button>
            <button
              className="btn"
              type="button"
              onClick={
                () => {
                  getGoods(get5First());
                }
              }
            >
              First 5 goods
            </button>
            <button
              className="btn"
              type="button"
              onClick={
                () => {
                  getGoods(getRed());
                }
              }
            >
              Red goods
            </button>
          </div>
          <GoodsList goods={goods} />
        </section>
      </>
    );
  }
}

export default App;
