import React from 'react';

import './App.scss';
import { GoodsList } from './GoodsList';
import 'bulma/css/bulma.min.css';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  loadAllGoods = async() => {
    const goods = await getAll();

    this.setState({ goods });
  }

  loadFiveFirstGoods = async() => {
    const goods = await get5First();

    this.setState({ goods });
  }

  loadRedGoods = async() => {
    const goods = await getRedGoods();

    this.setState({ goods });
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="container">
        <h1 className="title">Dynamic list of Goods</h1>
        <div className="buttons">
          <button
            className="button is-link is-light"
            type="button"
            onClick={this.loadAllGoods}
          >
            Load All goods
          </button>
          <button
            className="button is-link is-light"
            type="button"
            onClick={this.loadFiveFirstGoods}
          >
            Load first 5 goods
          </button>
          <button
            className="button is-link is-light"
            type="button"
            onClick={this.loadRedGoods}
          >
            Load only red goods
          </button>
        </div>
        {goods.length > 0 && (
          <GoodsList goods={goods} />
        )}
      </div>
    );
  }
}

export default App;
