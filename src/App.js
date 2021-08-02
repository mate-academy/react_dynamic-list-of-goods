import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

export class App extends React.PureComponent {
  state = {
    goods: [],
  }

  setGoods = (receiveGoods) => {
    receiveGoods()
      .then(goods => this.setState({ goods }));
  }

  render() {
    const { goods } = this.state;
    const { setGoods } = this;

    return (
      <div className="card">
        <h1 className="card-title">
          List of goods
        </h1>
        <GoodsList goods={goods} />
        <button
          type="button"
          className="button is-black"
          onClick={() => {
            setGoods(getAll);
          }}
        >
          Load all goods
        </button>
        <button
          className="button is-danger"
          type="button"
          onClick={() => {
            setGoods(getRedGoods);
          }}
        >
          Load red goods
        </button>
        <button
          type="button"
          className="button is-grey"
          onClick={() => {
            setGoods(get5First);
          }}
        >
          Load 5 first goods
        </button>
      </div>
    );
  }
}
