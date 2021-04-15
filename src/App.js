import React from 'react';

import './App.scss';

import { get5First, getAll, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';

export class App extends React.Component {
  state = {
    goods: [],
  }

  goodsHandler = (callback) => {
    callback().then((goods) => {
      this.setState({
        goods,
      });
    });
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <div className="buttons-wrapper">
          <button
            type="button"
            className="button"
            onClick={() => this.goodsHandler(getAll)}
          >
            All goods
          </button>
          <button
            className="button button--blue"
            type="button"
            onClick={() => this.goodsHandler(get5First)}
          >
            five first
          </button>
          <button
            className="button button--red"
            type="button"
            onClick={() => this.goodsHandler(getRedGoods)}
          >
            Red goods
          </button>
        </div>
        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;
