import React from 'react';

import './App.scss';
import 'bulma/bulma.sass';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';
// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  handleButton = (callback) => {
    callback()
      .then(goodsFromServer => this.setState({
        goods: goodsFromServer,
      }));
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="container">
        <h1 className="title">Dynamic list of Goods</h1>

        <div className="buttons">
          <button
            type="button"
            className="button is-primary is-light"
            onClick={() => this.handleButton(getAll)}
          >
            Show all goods
          </button>

          <button
            type="button"
            className="button is-info is-light"
            onClick={() => this.handleButton(get5First)}
          >
            Show five sort goods
          </button>

          <button
            type="button"
            className="button is-danger is-light"
            onClick={() => this.handleButton(getRedGoods)}
          >
            Show red goods
          </button>
        </div>

        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;
