import React from 'react';
import { get5First, getAll, getRedGoods } from './api/goods';
import { GoodList } from './component/GoodList';

import './App.scss';
import 'bulma';

class App extends React.Component {
  state = {
    goods: [],
  }

  goodsHandler = async(request) => {
    const goods = await request();

    this.setState({ goods });
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <div className="app">
          <button
            className="button is-primary is-outlined"
            type="button"
            onClick={() => this.goodsHandler(getAll)}
          >
            Get all
          </button>
          <button
            className="button is-primary is-outlined"
            type="button"
            onClick={() => this.goodsHandler(get5First)}
          >
            Get 5 first
          </button>
          <button
            className="button is-primary is-outlined"
            type="button"
            onClick={() => this.goodsHandler(getRedGoods)}
          >
            Get red
          </button>
          <GoodList goods={goods} />
        </div>
      </>
    );
  }
}

export default App;
