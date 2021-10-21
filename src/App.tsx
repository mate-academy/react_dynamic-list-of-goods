import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';

export class App extends React.Component<{}, {}> {
  state = {
    goods: [],
  };

  onLoadAllGoods = () => {
    getAll().then(result => {
      this.setState({ goods: result });
    });
  };

  onLoadFirstFive = () => {
    get5First().then(result => {
      this.setState({ goods: result });
    });
  };

  onLoadRedGoods = () => {
    getRedGoods().then(result => {
      this.setState({ goods: result });
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Push on Button</h1>
        <button
          type="button"
          onClick={
            this.onLoadAllGoods
          }
        >
          Load All goods

        </button>
        <button
          type="button"
          onClick={
            this.onLoadFirstFive
          }
        >
          Load 5 first goods

        </button>
        <button
          type="button"
          onClick={
            this.onLoadRedGoods
          }
        >
          Load red goods

        </button>
        <GoodsList goods={goods} />
      </>
    );
  }
}
