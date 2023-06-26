import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export class App extends React.Component {
  state = {
    goods: [],
  };

  render(): React.ReactNode {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          data-cy="all-button"
          onClick={() => {
            getAll()
              .then(
                filteredGoods => {
                  this.setState({ goods: filteredGoods });
                },
              );
          }}
        >
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={() => {
            get5First()
              .then(
                filteredGoods => {
                  this.setState({ goods: filteredGoods });
                },
              );
          }}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          data-cy="red-button"
          onClick={() => {
            getRedGoods()
              .then(
                filteredGoods => {
                  this.setState({ goods: filteredGoods });
                },
              );
          }}
        >
          Load red goods
        </button>

        <GoodsList goods={goods} />
      </div>
    );
  }
}
