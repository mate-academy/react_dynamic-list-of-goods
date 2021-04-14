import React from 'react';
import { GoodsList } from './components/GoodsList';
import '../node_modules/bulma/css/bulma.min.css';

import './App.scss';

import { getAll, get5First, getRed } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  goodsHandler = (callback) => {
    callback()
      .then((goods) => {
        this.setState({
          goods,
        });
      });
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="app">
        <h1 className="title is-2">Dynamic list of Goods</h1>
        <div>
          <button
            type="button"
            className="button is-info"
            onClick={() => this.goodsHandler(getAll)}
          >
            ALL GOODS
          </button>
          <button
            type="button"
            className="button is-warning"
            onClick={() => this.goodsHandler(get5First)}
          >
            5 FIRST GOODS
          </button>
          <button
            type="button"
            className="button is-danger"
            onClick={() => this.goodsHandler(getRed)}
          >
            RED GOODS
          </button>
        </div>
        {goods.length > 0 && <GoodsList goods={goods} />}
      </div>
    );
  }
}

export default App;
